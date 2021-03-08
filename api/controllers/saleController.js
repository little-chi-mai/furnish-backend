const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const mongoose = require("mongoose");
const productModel = require("../models/productModel");
const Sale = mongoose.model("Sale");
// const {validateCartItems} = require('use-shopping-cart/src/serverUtil');
const axios = require('axios');
const { response } = require("express");
// const User = mongoose.model("User");


// exports.getCheckoutSession = (req, res) => {
// const product = await productModel.findById(req.params.tourId)
// res.send("Hello World");
// Create checkout session
// stripe.checkout.session.create({
//     payment_method_types: ['card'],
//     success_url: `${req.protocol}://${req.get('products')}`,
//     cancel_url: `${req.protocol}://${req.get('products')}`
// })
// };

exports.checkout = (req, res) => {
	const { user, products } = req.body;
	const newSale = new Sale({
		user,
		products
	});
	newSale.save((err, sale) => {
		if (err) res.send(err);
		res.json(sale);
	});
};

exports.findUserSales = (req, res) => {
	Sale.find({ user: req.params.userId })
		.populate("products.item")
		.then((err, sales) => {
			if (err) res.send(err);
			res.json({
				sales
			});
		})
		.catch((err) => console.log("There was ERROR:", err));
};

exports.listSales = (req, res) => {
	Sale.find({})
		.populate("products.item")
		.populate("user")
		.then((err, sales) => {
			if (err) res.send(err);
			res.json({
				sales
			});
		});
};


exports.createCheckoutSession = async (req, res, next) => {
	try {

		const cartItems = req.body;

		const cartItemsArray = Object.keys(cartItems).map(key => cartItems[key]);

		const validateCartItems = (inventory, cartDetails) => {
			const validatedItems = [];
			cartItemsArray.map(cartItem => {
				const inventoryItem = inventory.find((product) => product.id === cartItem.id);
				if (!inventoryItem) throw new Error(`Product ${sku} not found!`)
				const item = {
				name: inventoryItem.name,
				amount: inventoryItem.price * 100,
				currency: "AUD",
				quantity: cartItem.quantity
				}
				if (inventoryItem.description) item.description = inventoryItem.description
				if (inventoryItem.image) item.images = [inventoryItem.image]
				validatedItems.push(item)
			})
			return validatedItems;
		}

		function getProducts(){
			const promise = axios.get('http://localhost:3000/products');
			return promise
		} 
		
		const products = (await getProducts()).data;

		const line_items = validateCartItems(products, cartItems);

		const session = await stripe.checkout.sessions.create({
			submit_type: "pay",
			payment_method_types: ['card'],
			success_url: `http://localhost:3001/`,
			cancel_url: `http://localhost:3001/products`,
			line_items,
		});

		res.status(200).json({
			status: 'success',
			session
		})
	} catch (error) {
		res.status(500).json({statusCode: 500, message: error.message});
	}
}

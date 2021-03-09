const productController = require("./productController");

const mongoose = require("mongoose");
const productModel = require("../models/productModel");
const Sale = mongoose.model("Sale");
const axios = require('axios');
const { response } = require("express");
// const User = mongoose.model("User");

require('dotenv').config;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



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
	console.log("CHECKOUT()");
	const { user, products } = req.body;
	console.log(user, products);
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
		
		const validateCartItems = (inventory, cartDetails) => {
			const validatedItems = [];
			const cartItemsArray = Object.keys(cartDetails).map(key => cartItems[key]);
			cartItemsArray.map(cartItem => {
				const inventoryItem = inventory.find((product) => product.id === cartItem.id);
				if (!inventoryItem) throw new Error(`Product ${product.id} not found!`)
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

		const products = (await productController.allProducts());

		const line_items = validateCartItems(products, cartItems);

		const origin = process.env.NODE_ENV === 'production' ? req.headers.origin : 'http://localhost:3001'

		const checkoutSession = await stripe.checkout.sessions.create({
			submit_type: 'pay',
			payment_method_types: ['card'],
			success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: origin,
			line_items,
			billing_address_collection: 'auto',
			shipping_address_collection: {
				allowed_countries: ["AU", "NZ", "US"]
			},
			mode: 'payment'
		});

		res.status(200).json(checkoutSession)
	} catch (error) {
		res.status(500).json({statusCode: 500, message: error.message});
	}
}

exports.getCheckoutSession = async (req, res) => {
	// console.log(req);
	const {sessionId} = req.params;

	try {
	  if (!sessionId.startsWith("cs_")) {
		throw Error('Incorrect checkout session id')
	  }
  
	  const checkoutSession = await stripe.checkout.sessions.retrieve(
		sessionId,
		{expand: ["payment_intent"]}
	  );
	  res.status(200).json(checkoutSession)
	} catch (error) {
	  res.status(500).json({statusCode: 500, message: error.message});
	}
  }
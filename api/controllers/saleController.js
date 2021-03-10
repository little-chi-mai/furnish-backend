const productController = require("./productController");
const { ROOT, PRODUCTS } = require("../config/serverData");

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
	// console.log("CHECKOUT()");
	const { user, products } = req.body;
	// console.log(user, products);
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

// Function that validate CartItems were given from FE
const validateCartItems = (inventory, cartDetails) => {
	const validatedItems = [];
	const cartItemsArray = Object.keys(cartDetails).map(key => cartDetails[key]);
	cartItemsArray.map(cartItem => {
		const inventoryItem = inventory.find((product) => product.id === cartItem.id);
		if (!inventoryItem) throw new Error(`Product ${cartItem.id} not found!`);
		const item = {
			quantity: cartItem.quantity,
			price_data: {
				currency: "AUD",
				product_data: {
					name: inventoryItem.name,
					metadata: {
						id: inventoryItem.id
					}
				},
				unit_amount: inventoryItem.price * 100,
			},
		}
		if (inventoryItem.description) item.price_data.product_data.description = inventoryItem.description;
		if (inventoryItem.image) item.price_data.product_data.images = [inventoryItem.image];
		validatedItems.push(item)
	})
	return validatedItems;
};

exports.createCheckoutSession = async (req, res, next) => {
	try {
		const cartItems = req.body['cartItems'];
		const user = req.body['user'];
		console.log('cartItems', cartItems);
		console.log('user', user);

		const products = (await productController.allProducts());

		const lineItems = validateCartItems(products, cartItems);
		
		const origin = process.env.NODE_ENV === 'production' ? req.headers.origin : 'http://localhost:3001'

		const checkoutSession = await stripe.checkout.sessions.create({
			submit_type: 'pay',
			payment_method_types: ['card'],
			// success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
			success_url: origin,
			cancel_url: origin,
			line_items: lineItems,
			// billing_address_collection: 'auto',
			// shipping_address_collection: {
			// 	allowed_countries: ["AU", "NZ", "US"]
			// },
			mode: 'payment',
			client_reference_id: user.id,
			customer_email: user.email,
			// payment_intent_data: {
			// 	receipt_email: user.email
			// }
		});

		res.status(200).json(checkoutSession)
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message, error });
	}
}

// Function to save a success Sale into Database
const createSale = async session => {

	console.log("SESSION_ID", session.id);
	const checkoutSession = await stripe.checkout.sessions.retrieve(
		session.id,
		{expand: ["payment_intent"]}
	);

	console.log("DONE CHECKOUTSESSION", checkoutSession);

	const listLineItems = (await stripe.checkout.sessions.listLineItems(session.id)).data;

	console.log("DONE LISTLINEITEMS", listLineItems);

	const userId = checkoutSession.client_reference_id;

	console.log("DONE USER_ID", userId);

	let products = [];

	for (lineItem of listLineItems) {
		const product = {
			item: (await stripe.products.retrieve(lineItem.price.product)).metadata.id,
			qty: lineItem.quantity,
			price: lineItem.price.unit_amount 
		}
		products.push(product);
	}
	console.log("DONE PRODUCTS", products);

	const newSale = new Sale({
		user: userId,
		products: products
	});
	newSale.save();

	console.log("DONE CREATE NEW SALE", newSale);

};
  
exports.webhookCheckout = (req, res, next) => {
	const signature = req.headers['stripe-signature'];

	let event;
	try {
		event = stripe.webhooks.constructEvent(
		req.body,
		signature,
		process.env.STRIPE_WEBHOOK_SECRET
		);
	} catch (err) {
		return res.status(400).send(`Webhook error: ${err.message}`);
	}

	if (event.type === 'checkout.session.completed')
		console.log("SALES TO BE CREATED");
		createSale(event.data.object);

	res.status(200).json({ received: true });

};

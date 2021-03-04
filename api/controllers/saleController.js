const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const mongoose = require('mongoose');
const productModel = require('../models/productModel');
const Sale = mongoose.model('Sale');

exports.getCheckoutSession = (req, res) => {
    // const product = await productModel.findById(req.params.tourId)
    res.send('Hello World');
    // Create checkout session
    // stripe.checkout.session.create({
    //     payment_method_types: ['card'],
    //     success_url: `${req.protocol}://${req.get('products')}`,
    //     cancel_url: `${req.protocol}://${req.get('products')}`
    // })
}
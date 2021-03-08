const saleController = require("../controllers/saleController");
const productController = require("../controllers/productController");
const { validateCartItems } = require("use-shopping-cart/src/serverUtil");
// const axios = require('axios');
require("dotenv").config();

module.exports = (app) => {
	app.route("/checkout").post(saleController.checkout);
	// Request checkout session
	app.route("/checkout-sessions").post(saleController.createCheckoutSession);

	app.route("/sales/:userId").get(saleController.findUserSales);

	// For showing all sales - for admin
	app.route("/sales").get(saleController.listSales);
};

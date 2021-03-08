const saleController = require("../controllers/saleController");

module.exports = (app) => {
	app.route("/checkout").post(saleController.checkout);
	// Request checkout session
	app.route("/checkout-sessions").post(saleController.createCheckoutSession);

	app.route("/sales/:userId").get(saleController.findUserSales);

	// For showing all sales - for admin
	app.route("/sales").get(saleController.listSales);
};

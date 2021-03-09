const saleController = require("../controllers/saleController");

module.exports = (app) => {
	app.route("/create-sale").post(saleController.checkout);
	// Request checkout session
	app.route("/checkout-sessions").post(saleController.createCheckoutSession);

	app.route("/checkout-sessions/:sessionId").get(saleController.getCheckoutSession)

	app.route("/sales/:userId").get(saleController.findUserSales);

	// For showing all sales - for admin
	app.route("/sales").get(saleController.listSales);
};

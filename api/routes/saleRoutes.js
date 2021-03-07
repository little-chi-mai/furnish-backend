const saleController = require("../controllers/saleController");

module.exports = (app) => {
	app.route("/checkout").post(saleController.checkout);

	app.route("/sales/:userId").get(saleController.findUserSales);

	// For showing all sales - for admin
	app.route("/sales").get(saleController.listSales);
};

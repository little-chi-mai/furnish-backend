const discountController = require("../controllers/discountController");

module.exports = (app) => {
	app.route("/discounts/:discountCode").get(discountController.findDiscount);
	app.route("/discounts").get(discountController.listDiscounts).post(discountController.createDiscount);
};

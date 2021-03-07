const cartController = require("../controllers/cartController");

module.exports = (app) => {
	app.route("/carts/:userId").get(cartController.findCart).put(cartController.updateCart);
	app.route("/carts").post(cartController.createCart);
};

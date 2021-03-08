const cartController = require("../controllers/cartController");
require('dotenv').config();

module.exports = (app) => {
	app.route("/carts/:userId").get(cartController.findCart).put(cartController.updateCart);
	app.route("/carts").post(cartController.createCart);
};

const productController = require("../controllers/productController");

module.exports = (app) => {
	app.route("/products/q").get(productController.findProductBy);

	app.route("/products")
		.get(productController.listProducts)
		.post(productController.createProduct);

	app.route("/products/:productId").get(productController.findProduct).put(productController.updateProduct).delete(productController.deleteProduct);
};

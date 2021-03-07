const productBuilder = require("../controllers/productController");

module.exports = (app) => {
	app.route("/products/q").get(productBuilder.findProductBy);

	app.route("/products").get(productBuilder.listProducts).post(productBuilder.createProduct);

	app.route("/products/:productId").get(productBuilder.findProduct).put(productBuilder.updateProduct).delete(productBuilder.deleteProduct);
};

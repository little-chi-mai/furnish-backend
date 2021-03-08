const mongoose = require("mongoose");
const Product = mongoose.model("Product");

// http request/response for all products
exports.listProducts = (req, res) => {
	this.allProducts()
		.then(products => res.json(products))
		.catch(err => res.send(err));
};

// access database for all products
exports.allProducts = () => {
	const productPromise = Product.find({});
	return productPromise;
}

exports.createProduct = (req, res) => {
	const newProduct = new Product(req.body);
	newProduct.save((err, product) => {
		if (err) res.send(err);
		res.json(product);
	});
};

exports.findProduct = (req, res) => {
	Product.findById(req.params.productId, (err, product) => {
		if (err) res.send(err);
		res.json(product);
	});
};

exports.findProductBy = async (req, res) => {
	const categories = req.query.categories.split(", ");
	const color = req.query.color.split(", ");
	const query = {};

	if (categories.length > 0) query.categories = { $all: categories };
	if (color) query.color = { $in: color };

	const result = await Product.find(query);

	res.json(result);
};

exports.updateProduct = (req, res) => {
	Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true }, (err, product) => {
		if (err) res.send(err);
		res.json(product);
	});
};

exports.deleteProduct = (req, res) => {
	Product.deleteOne({ _id: req.params.productId }, (err) => {
		if (err) res.send(err);

		res.json({
			message: "Product sucessfully deleted",
			id: req.params.productId
		});
	});
};

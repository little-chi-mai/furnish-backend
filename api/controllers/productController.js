const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.listProducts = (req, res) => {
	Product.find({}, (err, products) => {
		if (err) res.send(err);
		res.json(products);
	});
};

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
	const categories = req.query.categories.split(",");
	const color = req.query.color.split(",");
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

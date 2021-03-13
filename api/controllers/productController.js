const mongoose = require("mongoose");
const Product = mongoose.model("Product");

// http request/response for all products
exports.listProducts = (req, res) => {
	this.allProducts()
		.then((products) => res.json(products))
		.catch((err) => res.send(err));
};

// access database for all products
exports.allProducts = () => {
	const productPromise = Product.find({});
	return productPromise;
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
	let { categories, color } = req.query;

	const query = {};

	if (categories) {
		categories = categories.split(", ");
		query.categories = { $all: categories };
	}

	if (color) {
		color = color.split(", ");
		query.color = { $in: color };
	}

	const result = await Product.find(query);

	res.json({
		result
	});
};

exports.searchProduct = async (req, res) => {
	let q = req.query.q.toLowerCase().split(" ");
	const queryString = {};

	// Figuring out search criteria
	for (let word of q) {
		const name = await Product.find({ name: { $regex: `.*${word}.*` } });
		const cat = await Product.find({ categories: { $regex: `.*${word}.*` } });
		const col = await Product.find({ color: { $in: word } });
		const style = await Product.find({ style: { $in: word } });

		if (cat.length > 0) queryString.categories = { $regex: `.*${word}.*` };
		else if (col.length > 0) queryString.color = word;
		else if (style.length > 0) queryString.style = word;
		else if (name.length > 0) queryString.name = { $regex: `.*${word}.*` };
	}

	// Find product
	const result = await Product.find(queryString);

	res.json({
		query: queryString,
		result
	});
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

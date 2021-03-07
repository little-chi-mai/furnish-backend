const mongoose = require("mongoose");
const Cart = mongoose.model("Cart");

exports.findCart = (req, res) => {
	Cart.find({ user: req.params.userId })
		.populate("cart")
		.then((err, cart) => {
			if (err) res.send(err);
			res.json({ cart });
		})
		.catch((err) => console.log("There was an ERROR:", err));
};

exports.createCart = (req, res) => {
	const { user } = req.body;

	const newCart = new Cart({
		user,
		cart: []
	});

	newCart.save((err, cart) => {
		if (err) res.send(err);
		res.json(cart);
	});
};

exports.updateCart = (req, res) => {
	Cart.findOneAndUpdate({ user: req.params.userId }, req.body, { new: true }, (err, cart) => {
		if (err) res.send(err);
		res.json(cart);
	});
};

const mongoose = require("mongoose");
const User = mongoose.model("User");
const Cart = mongoose.model("Cart");
const bcrypt = require("bcrypt");
const session = require("express-session");

exports.listUsers = (req, res) => {
	// if (!req.session.user_id) {
	// 	res.redirect("/login");
	// }
	User.find({}, (err, users) => {
		if (err) res.send(err);
		res.json({
			users
			// data: req.session
		});
	});
};

exports.createUser = async (req, res) => {
	const { email, password, password_confirmation, address, isAdmin, firstName, lastName } = req.body;
	const existingUserCheck = await User.find({ email });

	if (existingUserCheck.length > 0) {
		res.json({
			code: 401,
			error: "User already exists."
		});
	} else if (password === password_confirmation && password.length >= 5) {
		const hash = await bcrypt.hash(password, 12);
		const newUser = new User({
			email,
			hash,
			address,
			// isAdmin,
			firstName,
			lastName
		});

		newUser.save((err, user) => {
			if (err) res.send(err);

			const newCart = new Cart({
				user: user.id,
				cart: []
			});
			newCart.save();

			req.session.user_id = user.id;
			res.json({
				status: "LOGGED_IN",
				user
			});
		});
	} else {
		res.json({
			error: password.length < 5 ? "Password needs to be at least 5 characters long." : "Password doesn't match password confirmation."
		});
	}
};

exports.findUser = (req, res) => {
	User.findById(req.params.userId, (err, user) => {
		if (err) res.send(err);
		res.json(user);
	});
};

exports.updateUser = (req, res) => {
	User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
		if (err) res.send(err);
		res.json(user);
	});
};

exports.deleteUser = (req, res) => {
	User.deleteOne({ _id: req.params.userId }, (err) => {
		if (err) res.send(err);
		req.session.destroy();
		res.json({
			message: "User sucessfully deleted",
			id: req.params.userId
		});
	});
};

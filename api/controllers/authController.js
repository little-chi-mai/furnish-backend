const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	const validPassword = await bcrypt.compare(password, user.hash);

	if (validPassword) {
		req.session.user_id = user.id;
		res.json({
			status: "LOGGED_IN",
			user
			// data: req.session
		});
	} else {
		res.json({
			error: "Incorrect email or password."
		});
	}
};

exports.logout = (req, res) => {
	// req.session.user_id = null;
	req.session.destroy();

	res.json({
		code: 200,
		status: "NOT_LOGGED_IN",
		message: "Logged out successfully."
	});
};

exports.isLoggedIn = async (req, res) => {
	if (req.session.user_id) {
		const user = await User.findById(req.session.user_id);
		res.json({
			status: "LOGGED_IN",
			user
		});
	} else {
		res.json({
			status: "NOT_LOGGED_IN"
		});
	}
};

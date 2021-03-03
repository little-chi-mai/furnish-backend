const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.list_all_users = (req, res) => {
	User.find({}, (err, users) => {
		if (err) res.send(err);
		res.json(users);
	});
};

exports.create_a_user = (req, res) => {
	const newUser = new User(req.body);
	newUser.save((err, user) => {
		if (err) res.send(err);
		res.json(user);
	});
};

exports.find_a_user = (req, res) => {
	User.findById(req.params.userId, (err, user) => {
		if (err) res.send(err);
		res.json(user);
	});
};

exports.update_a_user = (req, res) => {
	User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
		if (err) res.send(err);
		res.json(user);
	});
};

exports.delete_a_user = (req, res) => {
	User.deleteOne({ _id: req.params.userId }, (err) => {
		if (err) res.send(err);
		res.json({
			message: "User sucessfully deleted",
			_id: req.params.userId,
		});
	});
};

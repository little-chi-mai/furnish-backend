const mongoose = require("mongoose");
const Review = mongoose.model("Review");

exports.findUserReviews = (req, res) => {
	Review.find({ user: req.params.userId })
		.populate("product")
		.then((err, reviews) => {
			if (err) res.send(err);
			res.json({
				reviews
			});
		})
		.catch((err) => console.log("There was an ERROR:", err));
};

exports.findProductReviews = (req, res) => {
	Review.find({ product: req.params.productId })
		.populate("user")
		.then((err, reviews) => {
			if (err) res.send(err);
			res.json({
				reviews
			});
		})
		.catch((err) => console.log("There was an ERROR:", err));
};

exports.listReviews = (req, res) => {
	Review.find({}, (err, reviews) => {
		if (err) res.send(err);
		res.json({
			reviews
		});
	});
};

exports.createReview = (req, res) => {
	const { user, product, text, stars } = req.body;

	const newReview = new Review({
		user,
		product,
		text,
		stars
	});

	newReview.save((err, review) => {
		if (err) res.send(err);
		res.json(review);
	});
};

exports.findReview = (req, res) => {
	Review.find({ _id: req.params.reviewId }, (err, review) => {
		if (err) res.send(err);
		res.json({
			review
		});
	});
};

exports.updateReview = (req, res) => {
	Review.findOneAndUpdate({ _id: req.params.reviewId }, req.body, { new: true }, (err, review) => {
		if (err) res.send(err);
		res.json(review);
	});
};

exports.deleteReview = (req, res) => {
	Review.deleteOne({ _id: req.params.reviewId }, (err) => {
		if (err) res.send(err);

		res.json({
			message: "Review sucessfully deleted",
			id: req.params.reviewId
		});
	});
};

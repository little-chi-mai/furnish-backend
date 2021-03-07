const reviewController = require("../controllers/reviewController");

module.exports = (app) => {
	app.route("/reviews/u/:userId").get(reviewController.findUserReviews);
	app.route("/reviews/p/:productId").get(reviewController.findProductReviews);
	app.route("/reviews/r/:reviewId").get(reviewController.findReview).put(reviewController.updateReview).delete(reviewController.deleteReview);
	app.route("/reviews").get(reviewController.listReviews).post(reviewController.createReview);
};

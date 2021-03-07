const mongoose = require("mongoose");
const Discount = mongoose.model("Discount");

exports.findDiscount = async (req, res) => {
	Discount.find({ code: req.params.discountCode.toUpperCase() }, (err, discount) => {
		if (err) res.send(err);

		console.log("ini discount", discount);

		if (discount.length !== 0) {
			res.json({
				discount: discount[0]
			});
		} else {
			res.json({
				error: "Invalid code."
			});
		}
	});
};

exports.createDiscount = (req, res) => {
	const { code, discount } = req.body;

	const newDiscount = new Discount({
		code,
		discount
	});

	newDiscount.save((err, discount) => {
		if (err) res.send(err);
		res.json({
			discount
		});
	});
};

exports.listDiscounts = (req, res) => {
	Discount.find({}, (err, discounts) => {
		if (err) res.send(err);

		res.json({
			discounts
		});
	});
};

const mongoose = require("mongoose");
const { Schema } = mongoose;

const DiscountSchema = new Schema({
	code: { type: String, uppercase: true },
	discount: { type: Number },
	expiry: { type: Date, default: () => Date.now() + 90 * 24 * 60 * 60 * 1000 }
});

DiscountSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	}
});

module.exports = mongoose.model("Discount", DiscountSchema);

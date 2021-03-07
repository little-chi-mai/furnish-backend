const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: [true, "User cannot be empty."]
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: "Product",
		required: [true, "Product cannot be empty."]
	},
	text: {
		type: String,
		required: [true, "Text cannot be empty."]
	},
	stars: {
		type: Number,
		required: [true, "Stars cannot be empty."]
	},
	reviewDate: { type: Date, default: Date.now }
});

ReviewSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	}
});

module.exports = mongoose.model("Review", ReviewSchema);

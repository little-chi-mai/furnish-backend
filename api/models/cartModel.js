const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: [true, "User cannot be empty."]
	},
	cart: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product"
		}
	]
});

CartSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	}
});

module.exports = mongoose.model("Cart", CartSchema);

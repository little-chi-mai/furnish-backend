const mongoose = require("mongoose");

const { Schema } = mongoose;

// {userId: ObjectId, productId: ObjectId}

const SaleSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	products: [
		{
			item: {
				type: Schema.Types.ObjectId,
				ref: "Product",
				required: [true, "Product cannot be empty."]
			},
			qty: {
				type: Number,
				required: [true, "Quantity cannot be empty."],
				min: 1
			},
			price: {
				type: Number,
				required: [true, "Price cannot be empty."],
				min: 0
			}
		}
	],
	saleDate: { type: Date, default: Date.now }
});

// SaleSchema.pre(/^find/, function (next) {
// 	this.populate("product");
// 	next();
// });

SaleSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	}
});

module.exports = mongoose.model("Sale", SaleSchema);

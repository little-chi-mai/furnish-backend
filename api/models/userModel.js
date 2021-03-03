const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	email: { type: String, unique: true, required: true },
	hash: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String },
	address: { type: String },
	createdDate: { type: Date, default: Date.now },
});

UserSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.hash;
	},
});

module.exports = mongoose.model("User", UserSchema);

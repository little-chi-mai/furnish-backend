const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	email: { type: String, unique: true, required: [true, "Username cannot be empty"] },
	hash: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String },
	address: {
		line: { type: String },
		city: { type: String },
		postcode: { type: String },
		state: { type: String }
	},
	isAdmin: { type: Boolean, default: false },
	createdDate: { type: Date, default: Date.now }
});

UserSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.hash;
	}
});

// UserSchema.pre("deleteOne", async function (data) {
// 	console.log("PRE MIDDLEWARE");
// 	console.log(data);
// });
// UserSchema.post("deleteOne", async function (data) {
// 	console.log("POST MIDDLEWARE");
// 	console.log(data);
// });
// UserSchema.post("save", async function (data) {
// 	console.log("POST MIDDLEWARE");
// 	console.log(data);
// });

module.exports = mongoose.model("User", UserSchema);

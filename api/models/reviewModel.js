const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
	firstName: { type: String },
	text: { type: String }
});

module.exports = mongoose.model("Review", ReviewSchema);

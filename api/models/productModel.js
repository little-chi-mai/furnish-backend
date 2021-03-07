const mongoose = require("mongoose");

const { Schema } = mongoose;

// {name: 'Chairy',
// description: 'Provide extreme comfort',
// price: 45,
// color: 'white',
// style: 'modern',
// category: 'living room',
// quantity: 100,
// image: 'https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/111753_0.jpg'
// }
const ProductSchema = new Schema({
	name: {
		type: String,
		required: "Name cannot be empty."
	},
	desciption: {
		type: String
	},
	price: {
		type: Number,
		required: [true, "Price cannot be empty."],
		min: 0
	},
	color: {
		type: String
	},
	style: {
		type: String
	},
	categories: [
		{
			type: String,
			lowercase: true
		}
	],
	qty: {
		type: Number
	},
	image: {
		type: String
	}
});

module.exports = mongoose.model("Product", ProductSchema);

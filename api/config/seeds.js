const mongoose = require("mongoose");
global.Product = require("../models/productModel");
const Product = mongoose.model("Product");
const dbServer = require("../config/database");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
mongoose.connect(dbServer, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// const User = mongoose.model("User");

// const p1 = new Product({
// 	name: "Chairy",
// 	description: "Provide extreme comfort",
// 	price: 45.0,
// 	color: "white",
// 	style: "modern",
// 	category: "living room",
// 	quantity: 100,
// 	image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/111753_0.jpg"
// });

// p1.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((err) => console.log(err));

// {name: 'Chairy',
// description: 'Provide extreme comfort',
// price: 45,
// color: 'white',
// style: 'modern',
// category: 'living room',
// quantity: 100,
// image: 'https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/111753_0.jpg'
// }

// const seedUsers = [
// 	{
// 		email: "ac@ga.co"
// 	}
// ];

const seedProducts = [
	{
		name: "Chairy",
		description: "Provide extreme comfort",
		price: 45,
		color: "white",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/111753_0.jpg"
	},
	{
		name: "Tably",
		description: "Great big table",
		price: 150,
		color: "black",
		style: "modern",
		categories: ["dining", "table", "indoor"],
		qty: 100,
		image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/114463_0_1_1.jpg.jpg"
	},
	{
		name: "Coffly",
		description: "Outdoor rectangle coffee table",
		price: 65,
		color: "white",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/1/113188.jpg"
	}
];

Product.insertMany(seedProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

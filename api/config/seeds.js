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

// const seedProducts = [
// 	{
// 		name: "Chairy",
// 		description: "Provide extreme comfort",
// 		price: 45,
// 		color: "white",
// 		style: "modern",
// 		categories: ["living room", "sofa"],
// 		qty: 100,
// 		image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/111753_0.jpg"
// 	},
// 	{
// 		name: "Tably",
// 		description: "Great big table",
// 		price: 150,
// 		color: "black",
// 		style: "modern",
// 		categories: ["dining", "table", "indoor"],
// 		qty: 100,
// 		image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/114463_0_1_1.jpg.jpg"
// 	},
// 	{
// 		name: "Coffly",
// 		description: "Outdoor rectangle coffee table",
// 		price: 65,
// 		color: "white",
// 		style: "modern",
// 		categories: ["outdoor", "table"],
// 		qty: 100,
// 		image: "https://www.jamessaid.com.au/media/catalog/product/cache/2/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/1/113188.jpg"
// 	}
// ];

// Product.insertMany(seedProducts)
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

const sofasProducts = [
	{
		name: "hemlingby",
		description:
			"Hemlingby sofa is ideal wherever space is limited - in front of a bay window, in a student flat or as a comfy retreat under a loft bed. The durable, dark grey fabric cover will withstand everyday wear.",
		price: 199,
		color: "grey",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemlingby-2-seat-sofa-knisa-dark-grey__0728848_pe736539_s5.jpg?f=xl"
	},
	{
		name: "farlov",
		description:
			"This is your best friend for movie nights and also the room’s centre of attention. We tried to think of everything. From the spacious comfortable seat cushion to the rounded armrests and soft covers.",
		price: 899,
		color: "white",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/faerloev-3-seat-sofa-flodafors-white__0479740_pe619080_s5.jpg?f=xl"
	},
	{
		name: "soderhamn",
		description:
			"If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax.",
		price: 779,
		color: "beige",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/soederhamn-3-seat-sofa-viarp-beige-brown__0802692_pe768543_s5.jpg?f=xl"
	},
	{
		name: "nockeby",
		description:
			"Be prepared – your friends may stay longer than you expected. The thick pocket-spring cushions with a memory foam layer and high armrests make Nockeby sofa invitingly comfortable.",
		price: 999,
		color: "grey",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/nockeby-three-seat-sofa-tallmyra-white-black-wood__0389184_pe559360_s5.jpg?f=xl"
	},
	{
		name: "klippan",
		description:
			"We launched Klippan sofa in the 1980s and it’s still a favourite. It's comfortable, fits almost everywhere and has many covers to choose from. A modern and timeless classic!",
		price: 249,
		color: "black",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/klippan-2-seat-sofa-vissle-grey__0239990_pe379591_s5.jpg?f=xl"
	},
	{
		name: "gronlid",
		description:
			"Snuggle up, feel warmly embraced and enjoy cosy nights and lazy days. This sofa is extra deep, has soft and moveable back cushions, and comes in various sizes and shapes – everything for your comfort.",
		price: 599,
		color: "white",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/groenlid-2-seat-sofa-inseros-white__0577219_pe668687_s5.jpg?f=xl"
	},
	{
		name: "vimle",
		description:
			"The Vimle sofa series has sections that can be combined as you like into a customised solution for you and your home – and as the family or home grows, you can complete the sofa and let it grow with you.",
		price: 669,
		color: "grey",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/vimle-2-seat-sofa-gunnared-medium-grey__0514356_pe639445_s5.jpg?f=xl"
	},
	{
		name: "landskrona",
		description:
			"Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.",
		price: 699,
		color: "green",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/landskrona-2-seat-sofa-gunnared-light-green-wood__0602106_pe680175_s5.jpg?f=xl"
	},
	{
		name: "kivik",
		description:
			"Cuddle up in the soft comfort of Kivik sofa. The generous size, low armrests and memory foam that adapts to the contours of your body invites to many hours of naps, socialising and relaxation.",
		price: 999,
		color: "black",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kivik-3-seat-sofa-with-chaise-longue-hillared-anthracite__0479956_pe619108_s5.jpg?f=xl"
	},
	{
		name: "sandbacken",
		description:
			"This sofa has soft back cushions and feels both spacious and generous when you sit in it. The neat yet stable design makes the sofa easy to lift if you want to refurnish or bring it along when moving.",
		price: 449,
		color: "grey",
		style: "modern",
		categories: ["living room", "sofa"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/sandbacken-3-seat-sofa-frillestad-light-grey__0524888_pe644615_s5.jpg?f=xl"
	}
];

Product.insertMany(sofasProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const desksProducts = [
	{
		name: "linnmon",
		description: "Great Table",
		price: 185,
		color: "black",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/linnmon-alex-table-black-brown-white__0737605_pe741182_s5.jpg?f=xl"
	},
	{
		name: "alex",
		description:
			"A clean look that’s easy to like, coupled with a clever design that keeps messy cables out of sight. The back is finished so you can place it in the middle of the room – all sides are just as beautiful.",
		price: 199,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/alex-desk-white__0242202_pe381724_s5.jpg?f=xl"
	},
	{
		name: "alex",
		description:
			"A clean look that’s easy to like, coupled with a clever design that keeps messy cables out of sight. The back is finished so you can place it in the middle of the room – all sides are just as beautiful.",
		price: 199,
		color: "blue",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/alex-desk-blue__0735964_pe740298_s5.jpg?f=xl"
	},
	{
		name: "micke",
		description:
			"A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.",
		price: 119,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/micke-desk-white__0736018_pe740345_s5.jpg?f=xl"
	},
	{
		name: "micke",
		description:
			"A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.",
		price: 139,
		color: "brown",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg?f=xl"
	},
	{
		name: "skarsta",
		description:
			"Changing positions from sitting to standing is good for you, and the crank handle allows you to work your arms while adjusting the height. Moving your body makes you both feel and work better.",
		price: 269,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/skarsta-desk-sit-stand-white__0777623_pe758665_s5.jpg?f=xl"
	},
	{
		name: "bekant",
		description:
			"This sturdy desk is guaranteed to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cables in place underneath.",
		price: 499,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/bekant-desk-sit-stand-white__0734925_pe739660_s5.jpg?f=xl"
	},
	{
		name: "bekant",
		description:
			"This sturdy desk is guaranteed to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cables in place underneath.",
		price: 499,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/bekant-desk-sit-stand-black-stained-ash-veneer-black__0734921_pe739657_s5.jpg?f=xl"
	},
	{
		name: "brusali",
		description: "Great Table",
		price: 99,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/brusali-desk-white__0783238_pe761521_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description: "Great Table",
		price: 229,
		color: "white",
		style: "modern",
		categories: ["living room", "desk"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/hemnes-desk-with-2-drawers-white-stain__0736012_pe740339_s5.jpg?f=xl"
	}
];

Product.insertMany(desksProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const tvProducts = [
	{
		name: "besta",
		description:
			"It’s not only the TV that’s smart! Besta TV benches combine contemporary good looks with practical function. You get lots of storage space and relief from cables that tend to get messy and gather dust.",
		price: 270,
		color: "white",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/besta-tv-bench-with-doors-white-lappviken-white__0719188_pe731908_s5.jpg?f=xl"
	},
	{
		name: "besta",
		description:
			"It’s not only the TV that’s smart! Besta TV benches combine contemporary good looks with practical function. You get lots of storage space and relief from cables that tend to get messy and gather dust.",
		price: 270,
		color: "blue",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/besta-tv-bench-with-doors-white-notviken-blue__0741115_pe742198_s5.jpg?f=xl"
	},
	{
		name: "besta",
		description:
			"It’s not only the TV that’s smart! Besta TV benches combine contemporary good looks with practical function. You get lots of storage space and relief from cables that tend to get messy and gather dust.",
		price: 270,
		color: "black",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/besta-tv-bench-with-doors-black-brown-lappviken-black-brown__0719179_pe731902_s5.jpg?f=xl"
	},
	{
		name: "brimnes",
		description:
			"When it’s tidy by the TV it’s easier to indulge in your favourite TV series. Keep your games, controls and accessories in the large drawers and feed the cables through the outlets in the back.",
		price: 149,
		color: "black",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/brimnes-tv-bench-black__0704610_pe725291_s5.jpg?f=xl"
	},
	{
		name: "brimnes",
		description:
			"When it’s tidy by the TV it’s easier to indulge in your favourite TV series. Keep your games, controls and accessories in the large drawers and feed the cables through the outlets in the back.",
		price: 149,
		color: "white",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/brimnes-tv-bench-white__0601754_pe681623_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description: "Great TV Entertainment Unit",
		price: 279,
		color: "white",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-tv-bench-white-stain__0644455_pe702706_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description: "Great TV Entertainment Unit",
		price: 279,
		color: "black",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-tv-bench-black-brown-light-brown__0806989_pe770202_s5.jpg?f=xl"
	},
	{
		name: "stockholm",
		description: "Great TV Entertainment Unit",
		price: 499,
		color: "walnut",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/stockholm-tv-bench-walnut-veneer__0644450_pe702701_s5.jpg?f=xl"
	},
	{
		name: "brusali",
		description: "Great TV Entertainment Unit",
		price: 99,
		color: "white",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/brusali-tv-bench-white__0808189_pe770717_s5.jpg?f=xl"
	},
	{
		name: "mosjo",
		description: "Great TV Entertainment Unit",
		price: 69,
		color: "black",
		style: "modern",
		categories: ["living room", "tv"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/mosjoe-tv-bench-black-brown__0644747_pe702935_s5.jpg?f=xl"
	}
];

Product.insertMany(tvProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const armchairProducts = [
	{
		name: "strandmon",
		description:
			"Bringing new life to an old favourite. We first introduced this chair in the 1950’s. Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!",
		price: 259,
		color: "grey",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/strandmon-wing-chair-nordvalla-dark-grey__0325432_pe517964_s5.jpg?f=xl"
	},
	{
		name: "poang",
		description: "Great armchair for the living room",
		price: 149,
		color: "grey",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/poaeng-armchair-birch-veneer-skiftebo-dark-grey__0937014_pe793536_s5.jpg?f=xl"
	},
	{
		name: "poang",
		description: "Great armchair for the living room",
		price: 149,
		color: "black",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/poaeng-armchair-birch-veneer-knisa-black__0571496_pe666929_s5.jpg?f=xl"
	},
	{
		name: "poang",
		description: "Great armchair for the living room",
		price: 149,
		color: "blue",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/poaeng-armchair-birch-veneer-hillared-dark-blue__0497130_pe628957_s5.jpg?f=xl"
	},
	{
		name: "koarp",
		description:
			"A jewel in the living room, placed on its own or together with other furniture. Colourful or discreet – you choose, but the comfort is always included. As is the secret storage pocket.",
		price: 249,
		color: "beige",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/koarp-armchair-gunnared-beige-black__0522280_pe643185_s5.jpg?f=xl"
	},
	{
		name: "koarp",
		description:
			"A jewel in the living room, placed on its own or together with other furniture. Colourful or discreet – you choose, but the comfort is always included. As is the secret storage pocket.",
		price: 249,
		color: "grey",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/koarp-armchair-gunnared-medium-grey-black__0522305_pe643209_s5.jpg?f=xl"
	},
	{
		name: "pello",
		description:
			"Comfy seating throughout the home gives a relaxed feel – and with airy PELLO armchair you can easily create your comfort zones everywhere. The secrets are good back support and a slightly resilient frame!",
		price: 79,
		color: "white",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg?f=xl"
	},
	{
		name: "stockholm",
		description: "Great TV Entertainment Unit",
		price: 499,
		color: "walnut",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/stockholm-tv-bench-walnut-veneer__0644450_pe702701_s5.jpg?f=xl"
	},
	{
		name: "vedbo",
		description:
			"Soft but distinct lines create an elegant profile. Perfect when you want your own space in an open environment, yet still socialise with others. The cover in blue adds tranquillity and beauty.",
		price: 199,
		color: "blue",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/vedbo-armchair-gunnared-blue__0634896_pe696809_s5.jpg?f=xl"
	},
	{
		name: "vedbo",
		description:
			"Soft but distinct lines create an elegant profile. Perfect when you want your own space in an open environment, yet still socialise with others. The cover in blue adds tranquillity and beauty.",
		price: 199,
		color: "grey",
		style: "modern",
		categories: ["living room", "chair"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/vedbo-armchair-gunnared-dark-grey__0512767_pe638683_s5.jpg?f=xl"
	}
];

Product.insertMany(armchairProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const bookcaseProducts = [
	{
		name: "billy",
		description:
			"It is estimated that every five seconds, one Billy bookcase is sold somewhere in the world. Pretty impressive considering we launched Billy in 1979. It’s the booklovers choice that never goes out of style.",
		price: 79,
		color: "white",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/billy-bookcase-white__0625599_pe692385_s5.jpg?f=xl"
	},
	{
		name: "billy",
		description:
			"It is estimated that every five seconds, one Billy bookcase is sold somewhere in the world. Pretty impressive considering we launched Billy in 1979. It’s the booklovers choice that never goes out of style.",
		price: 79,
		color: "black",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/billy-bookcase-black-brown__0644257_pe702533_s5.jpg?f=xl"
	},
	{
		name: "kallax",
		description:
			"Standing or lying, against the wall or to divide the room – Kallax series is eager to please and will adapt to your taste, space, budget and needs. Fine tune with drawers, shelves, boxes and inserts.",
		price: 85,
		color: "white",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kallax-shelving-unit-white__0644757_pe702939_s5.jpg?f=xl"
	},
	{
		name: "kallax",
		description:
			"Standing or lying, against the wall or to divide the room – Kallax series is eager to please and will adapt to your taste, space, budget and needs. Fine tune with drawers, shelves, boxes and inserts.",
		price: 85,
		color: "black",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kallax-shelving-unit-black-brown__0644754_pe702938_s5.jpg?f=xl"
	},
	{
		name: "gersby",
		description:
			"Loads of books but short of space? This shallow bookcase holds your series collections without taking up too much floor space. Perfect for bedrooms, hallways or smaller living areas.",
		price: 40,
		color: "white",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/gersby-bookcase-white__0251910_pe390723_s5.jpg?f=xl"
	},
	{
		name: "billy",
		description:
			"It is estimated that every five seconds, one Billy bookcase is sold somewhere in the world. Pretty impressive considering we launched Billy in 1979. It’s the booklovers choice that never goes out of style.",
		price: 165,
		color: "white",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/billy-bookcase-white__0644497_pe702733_s5.jpg?f=xl"
	},
	{
		name: "billy",
		description:
			"It is estimated that every five seconds, one Billy bookcase is sold somewhere in the world. Pretty impressive considering we launched Billy in 1979. It’s the booklovers choice that never goes out of style.",
		price: 165,
		color: "black",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/billy-bookcase-black-brown__0644502_pe702738_s5.jpg?f=xl"
	},
	{
		name: "billy",
		description:
			"It is estimated that every five seconds, one Billy bookcase is sold somewhere in the world. Pretty impressive considering we launched Billy in 1979. It’s the booklovers choice that never goes out of style.",
		price: 165,
		color: "brown",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/billy-bookcase-brown-ash-veneer__0411974_pe576223_s5.jpg?f=xl"
	},
	{
		name: "lommarp",
		description:
			"This storage series is inspired by traditional carpentry, combining style and functions for today's urban lifestyles. Use it wherever you need storage ― and mix with other furniture for a personal look.",
		price: 229,
		color: "blue",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/lommarp-bookcase-dark-blue-green__0739323_pe741690_s5.jpg?f=xl"
	},
	{
		name: "lommarp",
		description:
			"This storage series is inspired by traditional carpentry, combining style and functions for today's urban lifestyles. Use it wherever you need storage ― and mix with other furniture for a personal look.",
		price: 229,
		color: "beige",
		style: "modern",
		categories: ["living room", "bookcase", "shelve"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/lommarp-bookcase-light-beige__0739325_pe741691_s5.jpg?f=xl"
	}
];

Product.insertMany(bookcaseProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const cabinetProducts = [
	{
		name: "lixhult",
		description:
			"Everything you need for storing and keeping things organised at home. Choose a ready-made combination or create your own, adapted to your style and belongings. This is just one of many, many possibilities.",
		price: 110,
		color: "grey",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/lixhult-cabinet-combination-grey__0622550_pe690607_s5.jpg?f=xl"
	},
	{
		name: "lommarp",
		description:
			"This storage series is inspired by traditional carpentry, combining style and functions for today's urban lifestyles. Use it wherever you need storage ― and mix with other furniture for a personal look.",
		price: 399,
		color: "blue",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/lommarp-cabinet-dark-blue-green__0739327_pe741692_s5.jpg?f=xl"
	},
	{
		name: "lommarp",
		description:
			"This storage series is inspired by traditional carpentry, combining style and functions for today's urban lifestyles. Use it wherever you need storage ― and mix with other furniture for a personal look.",
		price: 399,
		color: "beige",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/lommarp-cabinet-light-beige__0739329_pe741693_s5.jpg?f=xl"
	},
	{
		name: "brusali",
		description: "Great Cabinet for the living room",
		price: 149,
		color: "white",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/brusali-cabinet-with-doors-white__0808185_pe770716_s5.jpg?f=xl"
	},
	{
		name: "brimnes",
		description: "Great Cabinet for the living room",
		price: 119,
		color: "white",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/brimnes-cabinet-with-doors-white__0627105_pe693181_s5.jpg?f=xl"
	},
	{
		name: "brimnes",
		description: "Great Cabinet for the living room",
		price: 119,
		color: "black",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/brimnes-cabinet-with-doors-black__0627112_pe693188_s5.jpg?f=xl"
	},
	{
		name: "havsta",
		description:
			"Made of solid wood with crafted details and a brushed surface, HAVSTA cabinet adds a genuine and timeless feel to your room. Choose one or combine several units to create a larger storage solution.",
		price: 299,
		color: "white",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/havsta-cabinet-with-plinth-white__0720096_pe732408_s5.jpg?f=xl"
	},
	{
		name: "havsta",
		description:
			"Made of solid wood with crafted details and a brushed surface, HAVSTA cabinet adds a genuine and timeless feel to your room. Choose one or combine several units to create a larger storage solution.",
		price: 299,
		color: "grey",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/havsta-cabinet-with-plinth-grey__0720095_pe732411_s5.jpg?f=xl"
	},
	{
		name: "havsta",
		description:
			"Made of solid wood with crafted details and a brushed surface, HAVSTA cabinet adds a genuine and timeless feel to your room. Choose one or combine several units to create a larger storage solution.",
		price: 299,
		color: "brown",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/havsta-cabinet-with-plinth-dark-brown__0720092_pe732404_s5.jpg?f=xl"
	},
	{
		name: "regissor",
		description: "Great Cabinet for the Living Room",
		price: 299,
		color: "white",
		style: "modern",
		categories: ["living room", "cabinet"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/regissoer-cabinet-white__0625060_pe692081_s5.jpg?f=xl"
	}
];

Product.insertMany(cabinetProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const diningTableProducts = [
	{
		name: "lerhamn",
		description: "Great Dining Table",
		price: 99,
		color: "wood",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/lerhamn-table-light-antique-stain-white-stain__0238239_pe377693_s5.jpg?f=xl"
	},
	{
		name: "lerhamn",
		description: "Great Dining Table",
		price: 99,
		color: "black",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/lerhamn-table-black-brown__0238237_pe377692_s5.jpg?f=xl"
	},
	{
		name: "lisabo",
		description:
			"We’re proud of our Lisabo series, awarded with the prestigious, international Red Dot Award, for its design. The products are durable, sturdy and easy to assemble, yet look light and hand-crafted.",
		price: 199,
		color: "ash",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/lisabo-table-ash-veneer__0631745_pe695175_s5.jpg?f=xl"
	},
	{
		name: "tarendo",
		description:
			"This simple table will serve you well. It has a straightforward design that is easy to place and the metal frame makes it very sturdy. The wood-effect surface is perfect for everyday use - simple as that!",
		price: 39,
		color: "black",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/taerendoe-table-black__0737362_pe741023_s5.jpg?f=xl"
	},
	{
		name: "melltorp",
		description:
			"This table suits many people from the minimalist to the family demanding everyday strength and durability. Put it in the kitchen or in the dining room. The clean design combines well with many styles.",
		price: 99,
		color: "white",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/melltorp-table-white__0737266_pe740964_s5.jpg?f=xl"
	},
	{
		name: "docksta",
		description: "Great Dining Table",
		price: 299,
		color: "white",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/docksta-table-white-white__0803262_pe768820_s5.jpg?f=xl"
	},
	{
		name: "omtanksam",
		description:
			"The matte surface is easy on your eyes, the edges are soft to touch and under the table there is plenty of room for your legs. Part of the OMTÄNKSAM collection – ergonomic products designed with care.",
		price: 299,
		color: "white",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/omtaenksam-table-white-birch__0658498_pe710243_s5.jpg?f=xl"
	},
	{
		name: "omtanksam",
		description:
			"The matte surface is easy on your eyes, the edges are soft to touch and under the table there is plenty of room for your legs. Part of the OMTÄNKSAM collection – ergonomic products designed with care.",
		price: 299,
		color: "grey",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/omtaenksam-table-anthracite-birch__0658510_pe710234_s5.jpg?f=xl"
	},
	{
		name: "kullaberg",
		description: "Great Dining Table",
		price: 199,
		color: "pine",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/kullaberg-desk-pine-black__0736574_pe740628_s5.jpg?f=xl"
	},
	{
		name: "vedbo",
		description:
			"The matte, velvety surface of this dining table invites you to feel its smoothness. It isn’t sensitive to fingerprints so go ahead and touch. Partners perfectly with VEDBO chair for a timeless look.",
		price: 599,
		color: "white",
		style: "modern",
		categories: ["dining room", "table"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/vedbo-dining-table-white__0766051_pe753698_s5.jpg?f=xl"
	}
];

Product.insertMany(diningTableProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const diningChairsProducts = [
	{
		name: "nordmyra",
		description: "Great Dining Chair",
		price: 49,
		color: "white",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/nordmyra-chair-white-birch__0507289_pe635042_s5.jpg?f=xl"
	},
	{
		name: "ingolf",
		description: "Great Dining Chair",
		price: 79,
		color: "white",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/ingolf-chair-white__0728152_pe736113_s5.jpg?f=xl"
	},
	{
		name: "ingolf",
		description: "Great Dining Chair",
		price: 79,
		color: "black",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/ingolf-chair-brown-black__0728153_pe736122_s5.jpg?f=xl"
	},
	{
		name: "ingolf",
		description: "Great Dining Chair",
		price: 79,
		color: "wood",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/ingolf-chair-antique-stain__0728154_pe736114_s5.jpg?f=xl"
	},
	{
		name: "stefan",
		description:
			"A sturdy chair with a solid wood construction that can handle the challenges of everyday life! Combines nicely with most styles, and if you’re looking for extra comfort, simply add a chair pad.",
		price: 35,
		color: "white",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/stefan-chair-white__0456421_pe604075_s5.jpg?f=g"
	},
	{
		name: "stefan",
		description:
			"A sturdy chair with a solid wood construction that can handle the challenges of everyday life! Combines nicely with most styles, and if you’re looking for extra comfort, simply add a chair pad.",
		price: 35,
		color: "black",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=xl"
	},
	{
		name: "idolf",
		description:
			"What’s good can always get better. After more than 5 years in our range, we found a way to produce IDOLF chair using less wood, making it lighter but just as sturdy, comfortable and easy to place.",
		price: 79,
		color: "black",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/idolf-chair-black__0728147_pe736109_s5.jpg?f=xl"
	},
	{
		name: "idolf",
		description:
			"What’s good can always get better. After more than 5 years in our range, we found a way to produce IDOLF chair using less wood, making it lighter but just as sturdy, comfortable and easy to place.",
		price: 79,
		color: "white",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/idolf-chair-white__0728148_pe736111_s5.jpg?f=xl"
	},
	{
		name: "lisabo",
		description:
			"A hand-crafted expression that is both comfy and sturdy to suit even the liveliest family members. Ideal for all the activities around the table like eating, playing games, drawing and homework.",
		price: 69,
		color: "ash",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0786549_pe763015_s5.jpg?f=xl"
	},
	{
		name: "lisabo",
		description:
			"A hand-crafted expression that is both comfy and sturdy to suit even the liveliest family members. Ideal for all the activities around the table like eating, playing games, drawing and homework.",
		price: 69,
		color: "black",
		style: "modern",
		categories: ["dining room", "chair"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/lisabo-chair-black__0786548_pe763014_s5.jpg?f=xl"
	}
];

Product.insertMany(diningChairsProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const bedsProducts = [
	{
		name: "songesand",
		description:
			"A sturdy bed frame with soft, profile edges and high legs. A classic shape that will last for many years. Also, there are spacious storage boxes under the bed where you can store bedding or clothes.",
		price: 214,
		color: "white",
		style: "modern",
		categories: ["bed room", "bed", "single"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__0655476_pe709044_s5.jpg?f=xl"
	},
	{
		name: "malm",
		description:
			"A clean design with solid wood veneer. Place the bed freestanding or with the headboard against a wall. If you need space for extra bedding, add MALM bed storage boxes on castors.",
		price: 149,
		color: "white",
		style: "modern",
		categories: ["bed room", "bed", "single"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/malm-bed-frame-high-white__0637620_pe704551_s5.jpg?f=xl"
	},
	{
		name: "malm",
		description:
			"A clean design with solid wood veneer. Place the bed freestanding or with the headboard against a wall. If you need space for extra bedding, add MALM bed storage boxes on castors.",
		price: 149,
		color: "black",
		style: "modern",
		categories: ["bed room", "bed", "single"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/malm-bed-frame-high-black-brown__0637621_pe704552_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description:
			"Sustainable beauty from sustainably-sourced solid wood, a durable and renewable material that maintains its genuine character with each passing year. Combines with the other furniture in the Hemnes series.",
		price: 199,
		color: "white",
		style: "modern",
		categories: ["bed room", "bed", "single"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-bed-frame-white-stain__0637616_pe698429_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description:
			"Sustainable beauty from sustainably-sourced solid wood, a durable and renewable material that maintains its genuine character with each passing year. Combines with the other furniture in the Hemnes series.",
		price: 199,
		color: "black",
		style: "modern",
		categories: ["bed room", "bed", "single"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-bed-frame-black-brown__0655475_pe709045_s5.jpg?f=xl"
	},
	{
		name: "slakt",
		description:
			"This bed frame is very versatile. Combine it with an underbed with storage underneath, or with different modules to create extra storage space or a comfy place for hanging out with friends.",
		price: 149,
		color: "white",
		style: "modern",
		categories: ["bed room", "bed", "single"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/slaekt-bed-frame-with-slatted-bed-base-white__0637774_pe698536_s5.jpg?f=xl"
	},
	{
		name: "askvoll",
		description:
			"Let the clean, simple design stand out or let the bed be a backdrop for your favourite textiles or other furnishings. The low headboard makes it a perfect choice under a window or sloped ceiling.",
		price: 279,
		color: "white",
		style: "modern",
		categories: ["bed room", "bed", "queen"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/askvoll-bed-frame-white-luroey__0637517_pe698357_s5.jpg?f=xl"
	},
	{
		name: "trysil",
		description:
			"Bedtime is reading time! The angled headboard allows you sit comfortably while reading. A perfect way to unwind before turning the lights off. Looks great with the other furniture in the Trysil series.",
		price: 249,
		color: "brown",
		style: "modern",
		categories: ["bed room", "bed", "queen"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/trysil-bed-frame-dark-brown-luroey__0638591_pe699025_s5.jpg?f=xl"
	},
	{
		name: "slattum",
		description:
			"Upholstered in soft woven fabric that brings a cosy feeling into your bedroom. The headboard is a comfy backrest for late night reading. And what’s more, it all comes in 1 package. Convenient, right?",
		price: 249,
		color: "grey",
		style: "modern",
		categories: ["bed room", "bed", "queen"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/slattum-upholstered-bed-frame-knisa-light-grey__0768244_pe754388_s5.jpg?f=xl"
	},
	{
		name: "leirvik",
		description:
			"If you’re a romantic, you’ll find it hard to resist these decorative curves in white steel. Make the bed with beautiful textiles and pillows and enjoy your dreams with fairy tale endings.",
		price: 199,
		color: "white",
		style: "modern",
		categories: ["bed room", "bed", "queen"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/leirvik-bed-frame-white-luroey__0637552_pe704561_s5.jpg?f=xl"
	}
];

Product.insertMany(bedsProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const wardrobesProducts = [
	{
		name: "hauga",
		description:
			"Use throughout the home, on its own or with other furniture in the HAUGA series. Sliding doors give you the space you need. Do you fold or hang? No need to choose, this wardrobe offers both possibilities.",
		price: 329,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hauga-wardrobe-with-sliding-doors-white__0898797_pe782657_s5.jpg?f=xl"
	},
	{
		name: "kleppstad",
		description:
			"Simple and smart! When all you need is a wardrobe with all the basic functions. If storage space is still not enough, why not add another wardrobe from the Kleppstad series?",
		price: 229,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kleppstad-wardrobe-with-sliding-doors-white__0823547_pe775917_s5.jpg?f=xl"
	},
	{
		name: "pax",
		description: "Keep it simple. Here's a basic solution to get you started, and space for more interiors if you want to upgrade.",
		price: 605,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/pax-wardrobe-white-hasvik-white__0378721_pe554729_s5.jpg?f=xl"
	},
	{
		name: "rakkestad",
		description:
			"Simple and smart! When all you need is a wardrobe with all the basic functions. If storage space is still not enough, why not add another wardrobe from the Rakkestad series?",
		price: 249,
		color: "black",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/rakkestad-wardrobe-with-sliding-doors-black-brown__0823992_pe776023_s5.jpg?f=xl"
	},
	{
		name: "pax",
		description: "This wardrobe combination is just as good looking on the outside as it is clever on the inside. Guaranteed to outlast years of outfits.",
		price: 765,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/pax-wardrobe-white-hasvik-white__0300268_pe426268_s5.jpg?f=xl"
	},
	{
		name: "trysil",
		description:
			"A clean look with sliding doors that don’t get in the way when you open them - a perfect solution when you need roomy storage in a tighter space. Combine two or more wardrobes for a larger solution. Psst! Please attach to the wall.",
		price: 249,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/trysil-wardrobe-white-mirror-glass__0626571_pe692875_s5.jpg?f=xl"
	},
	{
		name: "trysil",
		description:
			"A clean look with sliding doors that don’t get in the way when you open them - a perfect solution when you need roomy storage in a tighter space. Combine two or more wardrobes for a larger solution. Psst! Please attach to the wall.",
		price: 249,
		color: "brown",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/trysil-wardrobe-dark-brown-mirror-glass__0643011_pe701591_s5.jpg?f=xl"
	},
	{
		name: "hauga",
		description: "Great Wardrobe for the bed room",
		price: 787,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hauga-wardrobe-combination-white__0914348_pe783953_s5.jpg?f=xl"
	},
	{
		name: "pax",
		description:
			"A wardrobe with a compartment for everything. For those who really love organising each item, big or small, and still have a nice overview. Sorting on style or color is up to you.",
		price: 1095,
		color: "white",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/pax-wardrobe-white-hokksund-light-grey__0719010_pe731832_s5.jpg?f=xl"
	},
	{
		name: "pax",
		description: "Keep it simple. Here's a basic solution to get you started, and space for more interiors if you want to upgrade.",
		price: 965,
		color: "black",
		style: "modern",
		categories: ["bed room", "wardrobe"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/pax-wardrobe-black-brown-mehamn-black-brown-stained-ash-effect__0719036_pe731854_s5.jpg?f=xl"
	}
];

Product.insertMany(wardrobesProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const chestProducts = [
	{
		name: "malm",
		description:
			"A clean expression that fits right in, in the bedroom or wherever you place it. Smooth-running drawers and in a choice of finishes – pick your favourite. Psst! Please attach to the wall.",
		price: 99,
		color: "white",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__0484875_pe621342_s5.jpg?f=xl"
	},
	{
		name: "malm",
		description:
			"A clean expression that fits right in, in the bedroom or wherever you place it. Smooth-running drawers and in a choice of finishes – pick your favourite. Psst! Please attach to the wall.",
		price: 99,
		color: "black",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__0484870_pe621337_s5.jpg?f=xl"
	},
	{
		name: "malm",
		description:
			"A clean expression that fits right in, in the bedroom or wherever you place it. Smooth-running drawers and in a choice of finishes – pick your favourite. Psst! Please attach to the wall.",
		price: 99,
		color: "brown",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-brown-stained-ash-veneer__0484871_pe621338_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description:
			"Sustainable beauty from sustainably-sourced solid wood. A traditional look combined with modern function like quiet, smooth-running drawers. Psst! Please attach to the wall.",
		price: 499,
		color: "white",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-chest-of-8-drawers-white-stain__0627346_pe693299_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description:
			"Sustainable beauty from sustainably-sourced solid wood. A traditional look combined with modern function like quiet, smooth-running drawers. Psst! Please attach to the wall.",
		price: 499,
		color: "brown",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-chest-of-8-drawers-black-brown__0627349_pe693302_s5.jpg?f=xl"
	},
	{
		name: "kullen",
		description: "Great chest storage for the bed room",
		price: 179,
		color: "white",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kullen-chest-of-6-drawers-white__0651643_pe706985_s5.jpg?f=xl"
	},
	{
		name: "kullen",
		description: "Great chest storage for the bed room",
		price: 179,
		color: "brown",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kullen-chest-of-6-drawers-black-brown__0651638_pe706983_s5.jpg?f=xl"
	},
	{
		name: "hemnes",
		description:
			"Sustainable beauty from sustainably-sourced solid wood. A traditional look combined with modern function like quiet, smooth-running drawers. Psst! Please attach to the wall.",
		price: 249,
		color: "white",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hemnes-chest-of-3-drawers-white-stain__0152647_pe311000_s5.jpg?f=xl"
	},
	{
		name: "songesand",
		description:
			"The classic design with panelled drawer fronts never goes out of style. You won’t disturb anyone’s beauty sleep, since the drawers close softly and quietly. Psst! Please attach to the wall.",
		price: 329,
		color: "white",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/songesand-chest-of-6-drawers-white__0552202_pe658935_s5.jpg?f=xl"
	},
	{
		name: "koppang",
		description: "Great chest storage for the bed room",
		price: 199,
		color: "white",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/koppang-chest-of-3-drawers-white__0651169_pe706781_s5.jpg?f=xl"
	},
	{
		name: "koppang",
		description: "Great chest storage for the bed room",
		price: 199,
		color: "brown",
		style: "modern",
		categories: ["bed room", "chest", "storage"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/koppang-chest-of-3-drawers-black-brown__0521771_pe642944_s5.jpg?f=xl"
	}
];

Product.insertMany(chestProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const outdoorTableProducts = [
	{
		name: "krokholmen",
		description:
			"Complete your outdoor relaxation space with this maintenance-free beige coffee table or patio side table. The metal mesh table top is both stylish and functional since it allows water to pass through.",
		price: 69,
		color: "white",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/krokholmen-coffee-table-outdoor-beige__0736456_pe740544_s5.jpg?f=xl"
	},
	{
		name: "krokholmen",
		description:
			"Complete your outdoor relaxation space with this maintenance-free beige coffee table or patio side table. The metal mesh table top is both stylish and functional since it allows water to pass through.",
		price: 59,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/krokholmen-side-table-outdoor-grey__0824591_pe776139_s5.jpg?f=xl"
	},
	{
		name: "krokholmen",
		description:
			"Complete your outdoor relaxation space with this maintenance-free beige coffee table or patio side table. The metal mesh table top is both stylish and functional since it allows water to pass through.",
		price: 59,
		color: "beige",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/krokholmen-side-table-outdoor-beige__0824588_pe776137_s5.jpg?f=xl"
	},
	{
		name: "applaro",
		description:
			"Beauty that lasts, from sustainably sourced acacia. ÄPPLARÖ series covers it all from dining and cooking to lounging and storing – so you can enjoy long, lazy moments on the balcony or in the garden.",
		price: 99,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/aepplaroe-coffee-table-outdoor-brown-stained__0742686_pe742757_s5.jpg?f=xl"
	},
	{
		name: "bondholmen",
		description:
			"For you who wants a durable coffee table in a traditional style. It is made of high-quality, durable eucalyptus with handicraft details. For many enjoyable moments outdoors.",
		price: 119,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/bondholmen-coffee-table-outdoor-grey__0776120_pe757729_s5.jpg?f=xl"
	},
	{
		name: "husaro",
		description: "Great outdoor table",
		price: 79,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/husaroe-side-table-outdoor-dark-grey__0663725_pe715228_s5.jpg?f=xl"
	},
	{
		name: "solleron",
		description: "Great outdoor table",
		price: 129,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/solleroen-coffee-table-outdoor-anthracite-brown__0736460_pe740548_s5.jpg?f=xl"
	},
	{
		name: "solleron",
		description: "Great outdoor table",
		price: 129,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/solleroen-coffee-table-outdoor-anthracite-dark-grey__0736461_pe740549_s5.jpg?f=xl"
	},
	{
		name: "mastholmen",
		description:
			"This coffee table in natural bamboo and rattan is perfect for verandas, sunrooms or in gardens on a nice day. Lightweight, easy to move around and handmade – giving it a unique look.",
		price: 89,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/mastholmen-coffee-table-outdoor__0736458_pe740550_s5.jpg?f=xl"
	},
	{
		name: "mastholmen",
		description:
			"This small table in natural bamboo and rattan is perfect for verandas, sunrooms or in gardens on a nice day. Lightweight, easy to move around and handmade – giving it a unique look.",
		price: 69,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "table"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/mastholmen-side-table__0735435_pe739959_s5.jpg?f=xl"
	}
];

Product.insertMany(outdoorTableProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

const outdoorChairProducts = [
	{
		name: "kloven",
		description: "Great Outdoor Chair",
		price: 99,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/kloeven-chair-with-armrests-outdoor-black-brown__0728345_pe736189_s5.jpg?f=xl"
	},
	{
		name: "torparo",
		description:
			"TORPARÖ dining set comes in different sizes – choose to use it on a small city balcony or a large villa terrace. Durable, maintenance-free materials allow you to get the most out of your outdoor life!",
		price: 40,
		color: "beige",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/torparoe-chair-with-armrests-in-outdoor-white-beige__0812003_pe771902_s5.jpg?f=xl"
	},
	{
		name: "lacko",
		description:
			"Lacko series is inspired by traditional wrought-iron furniture bringing a romantic touch to your outdoor space. All pieces are maintenance-free so you have more time for daydreaming in your garden.",
		price: 50,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/laeckoe-chair-with-armrests-outdoor-grey__0728347_pe736192_s5.jpg?f=xl"
	},
	{
		name: "sjalland",
		description:
			"A garden dining chair with an aluminium frame and a hardwood seat/back to enjoy for a long time. Add a cushion to enhance the personal look and seating comfort. Fits perfectly with Sjalland dining tables.",
		price: 100,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/sjaelland-chair-with-armrests-outdoor-light-grey-light-brown__0728351_pe736199_s5.jpg?f=xl"
	},
	{
		name: "sjalland",
		description:
			"A garden dining chair with an aluminium frame and a hardwood seat/back to enjoy for a long time. Add a cushion to enhance the personal look and seating comfort. Fits perfectly with Sjalland dining tables.",
		price: 100,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/sjaelland-chair-with-armrests-outdoor-light-grey-dark-grey__0728350_pe736196_s5.jpg?f=xl"
	},
	{
		name: "tarno",
		description: "Great Outdoor Chair",
		price: 17,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/taernoe-chair-outdoor-foldable-black-light-brown-stained__0728354_pe736202_s5.jpg?f=xl"
	},
	{
		name: "lacko",
		description:
			"LÄCKÖ series is inspired by traditional wrought-iron furniture bringing a romantic touch to your outdoor space. All pieces are maintenance-free so you have more time for daydreaming in your garden.",
		price: 35,
		color: "grey",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/laeckoe-chair-outdoor-grey__0728346_pe736205_s5.jpg?f=xl"
	},
	{
		name: "hogsten",
		description: "Great Outdoor Chair",
		price: 129,
		color: "white",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 100,
		image: "https://www.ikea.com/au/en/images/products/hoegsten-chair-with-armrests-outdoor-white__0134124_pe290006_s5.jpg?f=xl"
	},
	{
		name: "applaro",
		description:
			"This garden chair is made for comfort with a curved back and armrests to lean your arms on. Add a chair cushion and you're ready to enjoy long meals and conversations around your garden dining table.",
		price: 70,
		color: "brown",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 1,
		image: "https://www.ikea.com/au/en/images/products/aepplaroe-chair-with-armrests-outdoor-brown-stained__0728356_pe736197_s5.jpg?f=xl"
	},
	{
		name: "fanbyn",
		description: "Great Outdoor Chair",
		price: 75,
		color: "white",
		style: "modern",
		categories: ["outdoor", "chair"],
		qty: 9,
		image: "https://www.ikea.com/au/en/images/products/fanbyn-chair-with-armrests-white-in-outdoor__0545007_pe655282_s5.jpg?f=g"
	}
];

Product.insertMany(outdoorChairProducts)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

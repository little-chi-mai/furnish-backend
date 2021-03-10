const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
// const pathfinderUI = require("pathfinder-ui"); // this to be removed for prod
const dotenv = require("dotenv");
const dbServer = require("./api/config/database");

dotenv.config();

mongoose.Promise = global.Promise; // before promises were a thing in JS
mongoose.set("useFindAndModify", false);
mongoose.connect(dbServer, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Models - Global
global.User = require("./api/models/userModel");
global.Product = require("./api/models/productModel");
global.Sale = require("./api/models/saleModel");
global.Review = require("./api/models/reviewModel");
global.Discount = require("./api/models/discountModel");
global.Cart = require("./api/models/cartModel");

// Routes
const userRoutes = require("./api/routes/userRoutes");
const authRoutes = require("./api/routes/authRoutes");
const productRoutes = require("./api/routes/productRoutes");
const saleRoutes = require("./api/routes/saleRoutes");
const reviewRoutes = require("./api/routes/reviewRoutes");
const discountRoutes = require("./api/routes/discountRoutes");
const cartRoutes = require("./api/routes/cartRoutes");

// Controller
const saleController = require("./api/controllers/saleController");

const port = process.env.PORT || 3000;
const app = express();

// For CORS
const devServer = "http://localhost:3001";
const prodServer = "https://furnique.netlify.app";

const whitelist = [devServer, prodServer];
const corsOptions = {
	origin(origin, callback) {
		if (whitelist.indexOf(origin) !== -1) callback(null, true);
		else callback(new Error("Not allowed by CORS"));
	},
	credentials: true
};

app.post("/webhook-checkout", bodyParser.raw({ type: "application/json" }), saleController.webhookCheckout);

app.use(cors(corsOptions)); // remember to turn on cors to accept specific domains
// app.use(cors());
app.use(
	session({
		secret: process.env.SESSION,
		resave: false,
		saveUninitialized: true,
		cookie: {
			sameSite: "none",
			secure: false
		}
	})
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
// 	"/pathfinder",
// 	function (req, res, next) {
// 		pathfinderUI(app);
// 		next();
// 	},
// 	pathfinderUI.router
// ); // this to be removed for prod

userRoutes(app);
authRoutes(app);
productRoutes(app);
saleRoutes(app);
reviewRoutes(app);
discountRoutes(app);
cartRoutes(app);

app.listen(port, console.log(`Server started on http://localhost:${port}`));

app.use((req, res) => {
	res.status(404).send({ url: `${req.originalUrl} not found` });
});

// console.log("All Routes:", app._router.stack[0]);

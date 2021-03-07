const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
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
global.saleModel = require("./api/models/saleModel");
global.Review = require("./api/models/reviewModel");

// Routes
const userRoutes = require("./api/routes/userRoutes");
const authRoutes = require("./api/routes/authRoutes");
const productRoutes = require("./api/routes/productRoutes");
const saleRoutes = require("./api/routes/saleRoutes");

const port = process.env.PORT || 3000;
const app = express();

// For CORS
const devServer = "http://localhost:3001";
const prodServer = "http://localhost:3001";

const whitelist = [devServer, prodServer];
const corsOptions = {
	origin(origin, callback) {
		if (whitelist.indexOf(origin) !== -1) callback(null, true);
		else callback(new Error("Not allowed by CORS"));
	}
};

app.use(cors()); // remember to turn on cors to accept specific domains
app.use(session({ secret: process.env.SESSION }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);
authRoutes(app);
productRoutes(app);
saleRoutes(app);

app.listen(port, console.log(`Server started on http://localhost:${port}`));

app.use((req, res) => {
	res.status(404).send({ url: `${req.originalUrl} not found` });
});

// console.log("All Routes:", app._router.stack[0]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

const dbServer = require("./api/config/database");

// console.log(dbServer);
dotenv.config();

global.Vocab = require("./api/models/userModel");
global.productModel = require('./api/models/productModel');
global.saleModel = require('./api/models/saleModel');

const routes = require("./api/routes/routes");
const productRoutes = require('./api/routes/productRoutes');
const saleRoutes = require('./api/routes/saleRoutes');

mongoose.Promise = global.Promise; // before promises were a thing in JS
mongoose.set("useFindAndModify", false);
mongoose.connect(dbServer, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
productRoutes(app);
saleRoutes(app);

app.listen(port);

app.use((req, res) => {
	res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on http://localhost:${port}`);

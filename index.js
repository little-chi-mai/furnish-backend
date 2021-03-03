const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbServer = require("./api/config/database");

// console.log(dbServer);

global.Vocab = require("./api/models/userModel");
const routes = require("./api/routes/routes");

mongoose.Promise = global.Promise; // before promises were a thing in JS
mongoose.set("useFindAndModify", false);
mongoose.connect(dbServer, {
	useNewUrlParser: true,
});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
	res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on http://localhost:${port}`);

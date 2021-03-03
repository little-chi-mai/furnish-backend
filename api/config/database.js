require("dotenv").config();

const production = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qmwr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const development = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lwbal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// const dbServer = production;
const dbServer = development;

module.exports = dbServer;

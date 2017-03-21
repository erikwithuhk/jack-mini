const pgPromise = require('pg-promise')();

if (!process.env.DATABASE_URL) {
  require('dotenv').config();
}

const connectionURL = process.env.DATABASE_URL;
const db = pgPromise(connectionURL);

module.exports = db;

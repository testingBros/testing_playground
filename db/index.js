require('dotenv').config();
const { Pool } = require("pg");

const db = new Pool({
  user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
});

db.connect()
.then(() => {
    console.log(`connected to database`);
  })
  .catch((error) => {
    console.log(`not connected due to error: ${error}`);
  });

  module.exports = {
    db,
  }
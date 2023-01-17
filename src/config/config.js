const dotenv = require('dotenv');
const pg = require('pg-promise');
const promise = require('bluebird');

const dbURL = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URL : process.env.DB_URL;
console.log(dbURL);
dotenv.config()
const pgp = pg({ promiseLib: promise, noLocking: true });
const db = pgp(dbURL);

module.exports = db



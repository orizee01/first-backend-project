const  { prodLogger, devLogger, testLogger } = require("./logger");

const { NODE_ENV } = process.env;

const logger = devLogger()
//   NODE_ENV === "development" ? devLogger() : NODE_ENV === "production" ? prodLogger() : testLogger();

module.exports = logger     
















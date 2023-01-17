const { format, createLogger, transports } = require("winston");

const { timestamp, combine, errors, printf, json } = format;

const devLogger = () => {
    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} - ${level.toUpperCase().padEnd(5)} - ${ stack || message }`;
    });
  return createLogger({
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        logFormat
      ),
    defaultMeta: { service: "user-service" },
    transports: [
      new transports.File({
        filename: "./server.log",
      }),
      new transports.Console(),
    ],
  });
}

const prodLogger = ()=> {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} - ${level.toUpperCase().padEnd(5)} - ${ stack || message }`;
  });

  return createLogger({
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  });
}

const testLogger = ()=> {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} - ${level.toUpperCase().padEnd(5)} - ${ stack || message }`;
    });

  return createLogger({
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()],
  });
}

module.exports = {
    prodLogger, devLogger, testLogger
}
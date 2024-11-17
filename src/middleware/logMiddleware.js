import logger from "../utils/log.js";

// Middleware for logging request and response details
const log = (req, res, next) => {
  const start = new Date();

  next();

  const ms = new Date() - start;

  const logMessage = `
  Method: ${req.method}
  Route: ${req.originalUrl}
  Status: ${res.statusCode}
  Duration: ${ms} ms `;

  // Log based on the response status code
  if (res.statusCode >= 500) {
    logger.error(logMessage);
  } else if (res.statusCode >= 400) {
    logger.warn(logMessage);
  } else {
    logger.info(logMessage);
  }
};

export default log;

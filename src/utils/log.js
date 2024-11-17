import winston from "winston";

// Create a logger instance using winston
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.json(({ level, message }) => {
      return `${level}:\n${message}`;
    })
  ),

  defaultMeta: { service: "booking-rest-api" },
});

// Add console logging in non-production environments
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default logger;

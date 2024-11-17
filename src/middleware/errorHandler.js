const errorHandler = (err, req, res, next) => {
  console.error(err);
  const customErrors = [
    "NotFoundError",
    "ValidationError",
    "UnauthorizedError",
    "ForbiddenError",
    "InternalServerError",
  ];

  // Handle custom errors based on the error constructor name
  if (customErrors.includes(err.constructor.name)) {
    return res.status(err.status).json({ Error: err.message });
  }

  // Prisma validation errors should return as 400
  if (err.constructor.name === "PrismaClientValidationError") {
    return res.status(400).json({ Error: "Invalid Input" });
  }

  // Default 500 server error
  return res.status(500).json({ Error: "Something went wrong!" });
};

export default errorHandler;

import ValidationError from "../errors/ValidationError.js";

const validateReviewData = (data) => {
  const requiredFields = ["userId", "propertyId", "rating", "comment"];

  // If any of the required fields isn't included, we throw an error
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new ValidationError(`Missing field: '${field}'`);
    }
  }
};

export default validateReviewData;

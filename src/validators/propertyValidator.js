import ValidationError from "../errors/ValidationError.js";

const validatePropertyData = (data) => {
  const requiredFields = [
    "title",
    "description",
    "location",
    "pricePerNight",
    "bedroomCount",
    "bathRoomCount",
    "maxGuestCount",
    "hostId",
    "rating",
  ];

  // If any of the required fields isn't included, we throw an error
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new ValidationError(`Missing field: '${field}'`);
    }
  }
};

export default validatePropertyData;

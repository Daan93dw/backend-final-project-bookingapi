import { PrismaClient } from "@prisma/client";
import validateAmenityData from "../../validators/amenityValidator.js";

export const createAmenityService = async (data) => {
  const prisma = new PrismaClient();

  // Validates the included data
  validateAmenityData(data);

  return prisma.amenity.create({
    data,
  });
};

export default createAmenityService;

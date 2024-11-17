import { PrismaClient } from "@prisma/client";
import validatePropertyData from "../../validators/propertyValidator.js";

export const createPropertyService = async (data) => {
  const prisma = new PrismaClient();

  // Validates the included data
  validatePropertyData(data);

  return prisma.property.create({
    data,
  });
};

export default createPropertyService;

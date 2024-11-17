import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const getPropertyById = async (id) => {
  const prisma = new PrismaClient();

  const property = await prisma.property.findUnique({
    where: {
      id,
    },
  });

  // If no property
  if (!property) {
    throw new NotFoundError(`Property with id '${id}' not found`);
  }

  return property;
};

export default getPropertyById;

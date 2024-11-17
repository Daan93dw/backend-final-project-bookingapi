import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const updatePropertyById = async (id, data) => {
  const prisma = new PrismaClient();

  const updatedProperty = await prisma.property.updateMany({
    where: { id },
    data,
  });

  // In case no property is found, we throw an error
  if (!updatedProperty || updatedProperty.count === 0) {
    throw new NotFoundError(`Property with id '${id}' not found.`);
  }

  return updatedProperty;
};

export default updatePropertyById;

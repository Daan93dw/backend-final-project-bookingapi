import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const deletePropertyById = async (id) => {
  const prisma = new PrismaClient();

  const deleteProperty = await prisma.property.deleteMany({
    where: { id },
  });

  // In case no property is found, we throw an error
  if (!deleteProperty || deleteProperty.count === 0) {
    throw new NotFoundError(`Property with id '${id}' not found`);
  }

  return deleteProperty;
};

export default deletePropertyById;

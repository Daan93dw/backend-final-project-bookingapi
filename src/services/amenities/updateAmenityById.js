import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const updateAmenityById = async (id, data) => {
  const prisma = new PrismaClient();

  const updatedAmenity = await prisma.amenity.updateMany({
    where: { id },
    data,
  });

  // In case no amenity is found, we throw an error
  if (!updatedAmenity || updatedAmenity.count === 0) {
    throw new NotFoundError(`Amenity with id '${id}' not found.`);
  }

  return updatedAmenity;
};

export default updateAmenityById;

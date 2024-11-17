import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const deleteAmenityById = async (id) => {
  const prisma = new PrismaClient();

  const deleteAmenity = await prisma.amenity.deleteMany({
    where: { id },
  });

  // In case no amenity is found, we throw an error
  if (!deleteAmenity || deleteAmenity.count === 0) {
    throw new NotFoundError(`Amenity with id '${id}' not found`);
  }

  return deleteAmenity;
};

export default deleteAmenityById;

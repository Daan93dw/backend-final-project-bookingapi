import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const getAmenityById = async (id) => {
  const prisma = new PrismaClient();

  const amenity = await prisma.amenity.findUnique({
    where: {
      id,
    },
  });

  if (!amenity) {
    throw new NotFoundError(`Amenity with id '${id}' not found`);
  }

  return amenity;
};

export default getAmenityById;

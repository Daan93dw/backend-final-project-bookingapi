import { PrismaClient } from "@prisma/client";

export const getAmenitiesService = async () => {
  const prisma = new PrismaClient();

  return prisma.amenity.findMany();
};

export default getAmenitiesService;

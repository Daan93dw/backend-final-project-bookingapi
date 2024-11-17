import { PrismaClient } from "@prisma/client";

export const getPropertiesService = async (queries) => {
  const prisma = new PrismaClient();
  const { location, pricePerNight, amenities } = queries;

  // In case more than 1 amenities are included in the query
  const amenitiesFilter = amenities ? amenities.split(",") : null;

  return prisma.property.findMany({
    where: {
      location,
      pricePerNight: pricePerNight ? parseFloat(pricePerNight) : undefined,
      ...(amenitiesFilter && {
        amenities: {
          some: {
            name: {
              in: amenitiesFilter,
            },
          },
        },
      }),
    },
    include: {
      amenities: true,
    },
  });
};

export default getPropertiesService;

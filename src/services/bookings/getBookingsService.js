import { PrismaClient } from "@prisma/client";

export const getBookingsService = async (queries) => {
  const prisma = new PrismaClient();

  const { userId } = queries;

  return prisma.booking.findMany({
    where: {
      userId,
    },
    include: {
      property: {
        select: {
          id: true,
          title: true,
        },
      },
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
};

export default getBookingsService;

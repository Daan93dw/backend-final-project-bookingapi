import { PrismaClient } from "@prisma/client";

export const getReviewsService = async () => {
  const prisma = new PrismaClient();

  return prisma.review.findMany();
};

export default getReviewsService;

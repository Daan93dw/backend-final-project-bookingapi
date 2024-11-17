import { PrismaClient } from "@prisma/client";
import validateReviewData from "../../validators/reviewValidator.js";

export const createReviewService = async (data) => {
  const prisma = new PrismaClient();

  // Validates the included data
  validateReviewData(data);

  return prisma.review.create({
    data,
  });
};

export default createReviewService;

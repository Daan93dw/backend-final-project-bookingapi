import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const updateReviewById = async (id, data) => {
  const prisma = new PrismaClient();

  const updatedReview = await prisma.review.updateMany({
    where: { id },
    data,
  });

  // In case no review is found, we throw an error
  if (!updatedReview || updatedReview.count === 0) {
    throw new NotFoundError(`Review with id '${id}' not found.`);
  }

  return updatedReview;
};

export default updateReviewById;

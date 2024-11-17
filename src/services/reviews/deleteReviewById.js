import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const deleteReviewById = async (id) => {
  const prisma = new PrismaClient();

  const deleteReview = await prisma.review.deleteMany({
    where: { id },
  });

  // In case no review is found, we throw an error
  if (!deleteReview || deleteReview.count === 0) {
    throw new NotFoundError(`Review with id '${id}' not found`);
  }

  return deleteReview;
};

export default deleteReviewById;

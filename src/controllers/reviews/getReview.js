import getReviewById from "../../services/reviews/getReviewById.js";

const getReview = async (req, res) => {
  const reviewId = req.params.id;
  const review = await getReviewById(reviewId);

  res.status(200).json(review);
};

export default getReview;

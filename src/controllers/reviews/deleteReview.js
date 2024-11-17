import deleteReviewById from "../../services/reviews/deleteReviewById.js";

const deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  await deleteReviewById(reviewId);

  res.status(200).json({ message: `Review with id '${reviewId}' deleted.` });
};

export default deleteReview;

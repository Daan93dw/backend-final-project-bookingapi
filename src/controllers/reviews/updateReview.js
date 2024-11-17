import updateReviewById from "../../services/reviews/updateReviewById.js";

const updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const updateData = req.body;
  await updateReviewById(reviewId, updateData);

  res.status(200).json({ message: `Review with id '${reviewId}' updated.` });
};

export default updateReview;

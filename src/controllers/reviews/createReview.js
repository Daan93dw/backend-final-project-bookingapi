import createReviewService from "../../services/reviews/createReviewService.js";

const createReview = async (req, res) => {
  const newReviewData = req.body;
  const review = await createReviewService(newReviewData);

  res.status(201).json(review);
};

export default createReview;

import getReviewsService from "../../services/reviews/getReviewsService.js";

const getReviews = async (req, res) => {
  const reviews = await getReviewsService();
  if (!reviews || reviews.length === 0) {
    return res.status(200).json({ message: "No reviews found", data: [] });
  }

  res.status(200).json(reviews);
};

export default getReviews;

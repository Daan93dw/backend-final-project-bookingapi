import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import getReviews from "../controllers/reviews/getReviews.js";
import getReview from "../controllers/reviews/getReview.js";
import createReview from "../controllers/reviews/createReview.js";
import updateReview from "../controllers/reviews/updateReview.js";
import deleteReview from "../controllers/reviews/deleteReview.js";

const router = express.Router();

// Routes '/reviews'
router.get("/", asyncWrapper(getReviews));
router.get("/:id", asyncWrapper(getReview));
router.post("/", asyncWrapper(createReview));
router.put("/:id", asyncWrapper(updateReview));
router.delete("/:id", asyncWrapper(deleteReview));

export default router;

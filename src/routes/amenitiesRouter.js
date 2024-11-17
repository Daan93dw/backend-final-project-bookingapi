import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import getAmenities from "../controllers/amenities/getAmenities.js";
import getAmenity from "../controllers/amenities/getAmenity.js";
import createAmenity from "../controllers/amenities/createAmenity.js";
import updateAmenity from "../controllers/amenities/updateAmenity.js";
import deleteAmenity from "../controllers/amenities/deleteAmenity.js";

const router = express.Router();

// Routes '/amenities'
router.get("/", asyncWrapper(getAmenities));
router.get("/:id", asyncWrapper(getAmenity));
router.post("/", asyncWrapper(createAmenity));
router.put("/:id", asyncWrapper(updateAmenity));
router.delete("/:id", asyncWrapper(deleteAmenity));

export default router;

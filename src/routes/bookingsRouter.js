import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import getBookings from "../controllers/bookings/getBookings.js";
import getBooking from "../controllers/bookings/getBooking.js";
import createBooking from "../controllers/bookings/createBooking.js";
import updateBooking from "../controllers/bookings/updateBooking.js";
import deleteBooking from "../controllers/bookings/deleteBooking.js";

const router = express.Router();

// Routes '/bookings'
router.get("/", asyncWrapper(getBookings));
router.get("/:id", asyncWrapper(getBooking));
router.post("/", asyncWrapper(createBooking));
router.put("/:id", asyncWrapper(updateBooking));
router.delete("/:id", asyncWrapper(deleteBooking));

export default router;

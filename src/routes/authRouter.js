import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import login from "../controllers/login/login.js";

const router = express.Router();

// Routes '/login'
router.post("/", asyncWrapper(login));

export default router;

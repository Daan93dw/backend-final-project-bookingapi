import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import getUsers from "../controllers/users/getUsers.js";
import getUser from "../controllers/users/getUser.js";
import createUser from "../controllers/users/createUser.js";
import updateUser from "../controllers/users/updateUser.js";
import deleteUser from "../controllers/users/deleteUser.js";

const router = express.Router();

// Routes '/users'
router.get("/", asyncWrapper(getUsers));
router.get("/:id", asyncWrapper(getUser));
router.post("/", asyncWrapper(createUser));
router.put("/:id", asyncWrapper(updateUser));
router.delete("/:id", asyncWrapper(deleteUser));

export default router;

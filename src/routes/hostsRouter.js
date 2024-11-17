import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import getHosts from "../controllers/hosts/getHosts.js";
import getHost from "../controllers/hosts/getHost.js";
import createHost from "../controllers/hosts/createHost.js";
import updateHost from "../controllers/hosts/updateHost.js";
import deleteHost from "../controllers/hosts/deleteHost.js";

const router = express.Router();

// Routes '/hosts'
router.get("/", asyncWrapper(getHosts));
router.get("/:id", asyncWrapper(getHost));
router.post("/", asyncWrapper(createHost));
router.put("/:id", asyncWrapper(updateHost));
router.delete("/:id", asyncWrapper(deleteHost));

export default router;

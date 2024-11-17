import express from "express";
import asyncWrapper from "../utils/asyncWrapper.js";
import getProperties from "../controllers/properties/getProperties.js";
import getProperty from "../controllers/properties/getProperty.js";

import updateProperty from "../controllers/properties/updateProperty.js";
import deleteProperty from "../controllers/properties/deleteProperty.js";
import createProperty from "../controllers/properties/createProperty.js";

const router = express.Router();

// Routes '/properties'
router.get("/", asyncWrapper(getProperties));
router.get("/:id", asyncWrapper(getProperty));
router.post("/", asyncWrapper(createProperty));
router.put("/:id", asyncWrapper(updateProperty));
router.delete("/:id", asyncWrapper(deleteProperty));

export default router;

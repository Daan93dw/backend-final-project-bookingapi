import "./instrument.js";
import express from "express";
import * as Sentry from "@sentry/node";
import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
import hostsRouter from "./routes/hostsRouter.js";
import propertiesRouter from "./routes/propertiesRouter.js";
import amenitiesRouter from "./routes/amenitiesRouter.js";
import bookingsRouter from "./routes/bookingsRouter.js";
import reviewsRouter from "./routes/reviewsRouter.js";
import log from "./middleware/logMiddleware.js";
import "dotenv/config";
import auth from "./middleware/authMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// AUTH MIDDLEWARE
app.use(auth);

// LOGGING MIDDLEWARE
app.use(log);

// ROUTES
app.use("/users", usersRouter);
app.use("/hosts", hostsRouter);
app.use("/properties", propertiesRouter);
app.use("/amenities", amenitiesRouter);
app.use("/bookings", bookingsRouter);
app.use("/reviews", reviewsRouter);

app.use("/login", authRouter);

// ERROR HANDLING
// Sentry.setupExpressErrorHandler(app);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

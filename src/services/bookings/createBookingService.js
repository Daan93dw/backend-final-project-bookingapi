import { PrismaClient } from "@prisma/client";
import validateBookingData from "../../validators/bookingValidator.js";

export const createBookingService = async (data) => {
  const prisma = new PrismaClient();

  // Validates the included data
  validateBookingData(data);

  return prisma.booking.create({
    data,
  });
};

export default createBookingService;

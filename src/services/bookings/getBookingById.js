import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const getBookingById = async (id) => {
  const prisma = new PrismaClient();

  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
  });

  if (!booking) {
    throw new NotFoundError(`Booking with id '${id}' not found`);
  }

  return booking;
};

export default getBookingById;

import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const updateBookingById = async (id, data) => {
  const prisma = new PrismaClient();

  const updatedBooking = await prisma.booking.updateMany({
    where: { id },
    data,
  });

  // In case no booking is found, we throw an error
  if (!updatedBooking || updatedBooking.count === 0) {
    throw new NotFoundError(`Booking with id '${id}' not found.`);
  }

  return updatedBooking;
};

export default updateBookingById;

import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const deleteBookingById = async (id) => {
  const prisma = new PrismaClient();

  const deleteBooking = await prisma.booking.deleteMany({
    where: { id },
  });

  // In case no booking is found, we throw an error
  if (!deleteBooking || deleteBooking.count === 0) {
    throw new NotFoundError(`Booking with id '${id}' not found`);
  }

  return deleteBooking;
};

export default deleteBookingById;

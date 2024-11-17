import updateBookingById from "../../services/bookings/updateBookingById.js";

const updateBooking = async (req, res) => {
  const bookingId = req.params.id;
  const updateData = req.body;
  await updateBookingById(bookingId, updateData);

  res.status(200).json({ message: `Booking with id '${bookingId}' updated.` });
};

export default updateBooking;

import deleteBookingById from "../../services/bookings/deleteBookingById.js";

const deleteBooking = async (req, res) => {
  const bookingId = req.params.id;
  await deleteBookingById(bookingId);

  res.status(200).json({ message: `Booking with id '${bookingId}' deleted.` });
};

export default deleteBooking;

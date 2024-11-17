import getBookingById from "../../services/bookings/getBookingById.js";

const getBooking = async (req, res) => {
  const bookingId = req.params.id;
  const booking = await getBookingById(bookingId);

  res.status(200).json(booking);
};

export default getBooking;

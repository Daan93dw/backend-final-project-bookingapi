import getBookingsService from "../../services/bookings/getBookingsService.js";

const getBookings = async (req, res) => {
  const bookings = await getBookingsService(req.query);
  if (!bookings || bookings.length === 0) {
    return res.status(200).json({ message: "No bookings found", data: [] });
  }

  res.status(200).json(bookings);
};

export default getBookings;

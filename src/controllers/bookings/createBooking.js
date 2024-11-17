import createBookingService from "../../services/bookings/createBookingService.js";

const createBooking = async (req, res) => {
  const newBookingData = req.body;
  const booking = await createBookingService(newBookingData);

  res.status(201).json(booking);
};

export default createBooking;

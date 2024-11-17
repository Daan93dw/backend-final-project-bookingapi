import createAmenityService from "../../services/amenities/createAmenityService.js";

const createAmenity = async (req, res) => {
  const newAmenityData = req.body;
  const amenity = await createAmenityService(newAmenityData);

  res.status(201).json(amenity);
};

export default createAmenity;

import getAmenityById from "../../services/amenities/getAmenityById.js";

const getAmenity = async (req, res) => {
  const amenityId = req.params.id;
  const amenity = await getAmenityById(amenityId);

  res.status(200).json(amenity);
};

export default getAmenity;

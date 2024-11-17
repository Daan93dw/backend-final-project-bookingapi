import getAmenitiesService from "../../services/amenities/getAmenitiesService.js";

const getAmenities = async (req, res) => {
  const amenities = await getAmenitiesService();
  if (!amenities || amenities.length === 0) {
    return res.status(200).json({ message: "No amenities found", data: [] });
  }

  res.status(200).json(amenities);
};

export default getAmenities;

import updateAmenityById from "../../services/amenities/updateAmenityById.js";

const updateAmenity = async (req, res) => {
  const amenityId = req.params.id;
  const updateData = req.body;
  await updateAmenityById(amenityId, updateData);

  res.status(200).json({ message: `Amenity with id '${amenityId}' updated.` });
};

export default updateAmenity;

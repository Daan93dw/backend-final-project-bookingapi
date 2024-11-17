import deleteAmenityById from "../../services/amenities/deleteAmenityById.js";

const deleteAmenity = async (req, res) => {
  const amenityId = req.params.id;
  await deleteAmenityById(amenityId);

  res.status(200).json({ message: `Amenity with id '${amenityId}' deleted.` });
};

export default deleteAmenity;

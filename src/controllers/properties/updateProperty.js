import updatePropertyById from "../../services/properties/updatePropertyById.js";

const updateProperty = async (req, res) => {
  const propertyId = req.params.id;
  const updateData = req.body;
  await updatePropertyById(propertyId, updateData);

  res
    .status(200)
    .json({ message: `Property with id '${propertyId}' updated.` });
};

export default updateProperty;

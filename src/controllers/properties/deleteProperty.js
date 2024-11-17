import deletePropertyById from "../../services/properties/deletePropertyById.js";

const deleteProperty = async (req, res) => {
  const propertyId = req.params.id;
  await deletePropertyById(propertyId);

  res
    .status(200)
    .json({ message: `Property with id '${propertyId}' deleted.` });
};

export default deleteProperty;

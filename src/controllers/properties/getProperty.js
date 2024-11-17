import getPropertyById from "../../services/properties/getPropertyById.js";

const getProperty = async (req, res) => {
  const propertyId = req.params.id;
  const property = await getPropertyById(propertyId);

  res.status(200).json(property);
};

export default getProperty;

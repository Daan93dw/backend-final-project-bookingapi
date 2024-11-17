import createPropertyService from "../../services/properties/createPropertyService.js";

const createProperty = async (req, res) => {
  const newPropertyData = req.body;
  const property = await createPropertyService(newPropertyData);

  res.status(201).json(property);
};

export default createProperty;

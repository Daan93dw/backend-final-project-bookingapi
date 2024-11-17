import getPropertiesService from "../../services/properties/getPropertiesService.js";

const getProperties = async (req, res) => {
  const properties = await getPropertiesService(req.query);
  if (!properties || properties.length === 0) {
    return res.status(200).json({ message: "No properties found", data: [] });
  }

  res.status(200).json(properties);
};

export default getProperties;

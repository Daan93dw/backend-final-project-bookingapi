import createHostService from "../../services/hosts/createHostService.js";

const createHost = async (req, res) => {
  const newHostData = req.body;
  const host = await createHostService(newHostData);

  res.status(201).json(host);
};

export default createHost;

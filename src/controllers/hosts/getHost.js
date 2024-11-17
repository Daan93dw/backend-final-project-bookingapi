import getHostById from "../../services/hosts/getHostById.js";

const getHost = async (req, res) => {
  const hostId = req.params.id;
  const host = await getHostById(hostId);

  res.status(200).json(host);
};

export default getHost;

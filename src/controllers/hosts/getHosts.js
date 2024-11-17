import getHostsService from "../../services/hosts/getHostsService.js";

const getHosts = async (req, res) => {
  const hosts = await getHostsService(req.query);
  if (!hosts || hosts.length === 0) {
    return res.status(200).json({ message: "No hosts found", data: [] });
  }

  res.status(200).json(hosts);
};

export default getHosts;

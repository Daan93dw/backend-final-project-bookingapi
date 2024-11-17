import updateHostById from "../../services/hosts/updateHostById.js";

const updateHost = async (req, res) => {
  const hostId = req.params.id;
  const updateData = req.body;
  await updateHostById(hostId, updateData);

  res.status(200).json({ message: `Host with id '${hostId}' updated.` });
};

export default updateHost;

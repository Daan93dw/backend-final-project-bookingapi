import deleteHostById from "../../services/hosts/deleteHostById.js";

const deleteHost = async (req, res) => {
  const hostId = req.params.id;
  await deleteHostById(hostId);

  res.status(200).json({ message: `Host with id '${hostId}' deleted.` });
};

export default deleteHost;

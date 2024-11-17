import getUserById from "../../services/users/getUserById.js";

const getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);

  res.status(200).json(user);
};

export default getUser;

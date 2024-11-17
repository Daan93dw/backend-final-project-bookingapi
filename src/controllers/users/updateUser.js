import updateUserById from "../../services/users/updateUserById.js";

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;
  await updateUserById(userId, updateData);

  res.status(200).json({ message: `User with id '${userId}' updated.` });
};

export default updateUser;

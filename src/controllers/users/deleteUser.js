import deleteUserById from "../../services/users/deleteUserById.js";

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await deleteUserById(userId);

  res.status(200).json({ message: `User with id '${userId}' deleted.` });
};

export default deleteUser;

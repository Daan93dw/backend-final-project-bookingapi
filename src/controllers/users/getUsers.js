import getUsersService from "../../services/users/getUsersService.js";

const getUsers = async (req, res) => {
  const users = await getUsersService(req.query);
  if (!users || users.length === 0) {
    return res.status(200).json({ message: "No users found", data: [] });
  }

  res.status(200).json(users);
};

export default getUsers;

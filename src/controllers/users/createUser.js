import createUserService from "../../services/users/createUserService.js";

const createUser = async (req, res) => {
  const newUserData = req.body;
  const user = await createUserService(newUserData);

  res.status(201).json(user);
};

export default createUser;

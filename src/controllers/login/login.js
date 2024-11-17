import InternalServerError from "../../errors/InternalServerError.js";
import createToken from "../../services/auth/createToken.js";
import loginUser from "../../services/auth/loginUser.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await loginUser(username, password);

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  const token = await createToken(user);

  if (!token) {
    throw new InternalServerError("Failed to create token.");
  }

  res.status(200).json({ token, user });
};

export default login;

import jwt from "jsonwebtoken";

// Generates a new JWT token
const createToken = async (user) => {
  const secretKey = process.env.AUTH_SECRET_KEY;

  const token = jwt.sign({ userId: user.id }, secretKey);
  return token;
};

export default createToken;

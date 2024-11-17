import { PrismaClient } from "@prisma/client";
import ValidationError from "../../errors/ValidationError.js";
import UnauthorizedError from "../../errors/UnauthorizedError.js";
import removePasswordFromUserData from "../../utils/removePasswordFromUserData.js";

const loginUser = async (username, password) => {
  const prisma = new PrismaClient();

  // Check if both username and password are provided
  if (!username || !password)
    throw new ValidationError("No username or password provided.");

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  // If no user is found or password doesn't match, throw an unauthorized error
  if (!user || password !== user.password)
    throw new UnauthorizedError("Invalid credentials.");

  // Removes password from the user object before returning
  return removePasswordFromUserData(user);
};

export default loginUser;

import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";
import removePasswordFromUserData from "../../utils/removePasswordFromUserData.js";

export const getUserById = async (id) => {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new NotFoundError(`User with id '${id}' not found`);
  }

  // Removes password from the user object before returning
  return removePasswordFromUserData(user);
};

export default getUserById;

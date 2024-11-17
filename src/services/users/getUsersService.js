import { PrismaClient } from "@prisma/client";
import removePasswordFromUserData from "../../utils/removePasswordFromUserData.js";

export const getUsersService = async (queries) => {
  const prisma = new PrismaClient();

  const { username, email } = queries;

  const users = prisma.user.findMany({
    where: {
      username,
      email,
    },
  });

  // Removes passwords from the user objects, before returning the array
  return (await users).map((user) => removePasswordFromUserData(user));
};

export default getUsersService;

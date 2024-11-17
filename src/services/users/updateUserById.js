import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const updateUserById = async (id, data) => {
  const prisma = new PrismaClient();

  const updatedUser = await prisma.user.updateMany({
    where: { id },
    data,
  });

  // In case no user is found, we throw an error
  if (!updatedUser || updatedUser.count === 0) {
    throw new NotFoundError(`User with id '${id}' not found.`);
  }

  return updatedUser;
};

export default updateUserById;

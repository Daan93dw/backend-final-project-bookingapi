import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const deleteUserById = async (id) => {
  const prisma = new PrismaClient();

  const deleteUser = await prisma.user.deleteMany({
    where: { id },
  });

  // In case no user is found, we throw an error
  if (!deleteUser || deleteUser.count === 0) {
    throw new NotFoundError(`User with id '${id}' not found`);
  }

  return deleteUser;
};

export default deleteUserById;

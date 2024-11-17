import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const updateHostById = async (id, data) => {
  const prisma = new PrismaClient();

  const updatedHost = await prisma.host.updateMany({
    where: { id },
    data,
  });

  // In case no host is found, we throw an error
  if (!updatedHost || updatedHost.count === 0) {
    throw new NotFoundError(`Host with id '${id}' not found.`);
  }

  return updatedHost;
};

export default updateHostById;

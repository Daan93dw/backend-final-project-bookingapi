import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const deleteHostById = async (id) => {
  const prisma = new PrismaClient();

  const deleteHost = await prisma.host.deleteMany({
    where: { id },
  });

  // In case no host is found, we throw an error
  if (!deleteHost || deleteHost.count === 0) {
    throw new NotFoundError(`Host with id '${id}' not found`);
  }

  return deleteHost;
};

export default deleteHostById;

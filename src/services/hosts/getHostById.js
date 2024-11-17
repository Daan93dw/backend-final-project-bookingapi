import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

export const getHostById = async (id) => {
  const prisma = new PrismaClient();

  const host = await prisma.host.findUnique({
    where: {
      id,
    },
  });

  if (!host) {
    throw new NotFoundError(`Host with id '${id}' not found`);
  }

  return host;
};

export default getHostById;

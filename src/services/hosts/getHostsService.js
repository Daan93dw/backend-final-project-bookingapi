import { PrismaClient } from "@prisma/client";

export const getHostsService = async (queries) => {
  const prisma = new PrismaClient();

  const { name } = queries;

  return prisma.host.findMany({
    where: {
      name,
    },
  });
};

export default getHostsService;

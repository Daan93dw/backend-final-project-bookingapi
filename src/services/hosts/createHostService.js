import { PrismaClient } from "@prisma/client";
import validateHostData from "../../validators/hostValidator.js";

export const createHostService = async (data) => {
  const prisma = new PrismaClient();

  // Validates the included data
  validateHostData(data);

  return prisma.host.create({
    data,
  });
};

export default createHostService;

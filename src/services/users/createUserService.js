import { PrismaClient } from "@prisma/client";
import validateUserData from "../../validators/userValidator.js";

export const createUserService = async (data) => {
  const prisma = new PrismaClient();

  // Validates the included data
  validateUserData(data);

  return prisma.user.create({
    data,
  });
};

export default createUserService;

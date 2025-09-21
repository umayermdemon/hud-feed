/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from "@prisma/client";

// import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();
const createUserIntoDb = async (payload: any) => {
  const result = await prisma.user.create(payload);
  console.log(result);
};

export const userServices = {
  createUserIntoDb,
};

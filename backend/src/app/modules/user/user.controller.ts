import { Request, Response } from "express";

const createUserIntoDb = async (req: Request, res: Response) => {
  console.log(req, res);
};

export const userController = { createUserIntoDb };

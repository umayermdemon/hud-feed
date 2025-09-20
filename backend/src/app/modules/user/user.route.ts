import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/createUser", userController.createUserIntoDb);

export const userRouter = router;

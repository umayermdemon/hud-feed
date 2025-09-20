import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
const router = Router();

const apiRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;

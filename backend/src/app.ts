import express, { Request, Response, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./app/routes";
const app = express();

// parser
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello! This is hud-feed backend!");
});

app.use("/api/v1", router);

export default app;

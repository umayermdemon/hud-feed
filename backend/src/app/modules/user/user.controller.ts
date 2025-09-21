import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { userServices } from "./user.service";

const createUserIntoDb = catchAsync(async (req, res) => {
  const result = await userServices.createUserIntoDb(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully",
    data: result,
  });
  console.log(req, res);
});

export const userController = { createUserIntoDb };

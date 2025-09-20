import catchAsync from "../utils/catchAsync";

const createUserIntoDb = catchAsync(async (req, res) => {
  console.log(req, res);
});

export const userController = { createUserIntoDb };

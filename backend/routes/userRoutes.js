import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js"; // also add `.js` if using ES modules

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;

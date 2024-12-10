import express from "express";
import { craeteUser} from "../controllers/userController.js";

//create user Router
const userRouter = express.Router();

userRouter.post("/",craeteUser)

export default userRouter
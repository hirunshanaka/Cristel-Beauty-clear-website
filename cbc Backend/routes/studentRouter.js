import express from "express";
import { createStudent,deleteStudent, getStudents } from "../controllers/studentController.js";

//create studentRouter
const studentRouter = express.Router();

studentRouter.get("/",getStudents)
studentRouter.post("/",createStudent)
studentRouter.delete("/",deleteStudent)

export default studentRouter;
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';

//express,bodyparser,mongoose are libraries
const app =express();
const mongoUrl ="mongodb+srv://admin:1234@cluster0.ry4fm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//connect database
mongoose.connect(mongoUrl,{})
const connection =mongoose.connection;
connection.once("open",()=>{
    console.log("database connected")
    
})

//middlewear(turn the correct path)
app.use (bodyParser.json())
app.use("/api/students",studentRouter)
app.use("/api/products",productRouter)
app.use("/api/users",userRouter)


//this is server side 
app.listen(5000, () =>{
    console.log ("server is running on port 5000")
})
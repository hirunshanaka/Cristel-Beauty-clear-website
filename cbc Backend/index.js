import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import productRouter from './routes/productRouter.js';
import { loginUser } from './controllers/userController.js';
import orderRouter from './routes/orderRouter.js';
dotenv.config();
//express,bodyparser,mongoose are libraries
const app =express();
const mongoUrl =process.env.MONGO_DB_URI;

//connect database
mongoose.connect(mongoUrl,{})
const connection =mongoose.connection;
connection.once("open",()=>{
    console.log("database connected")
    
})

//middlewear(turn the correct path)
app.use (bodyParser.json())
app.use(
    (req, res, next) => {
        const token = req.headers["authorization"]?.replace("Bearer ", "")
        console.log(token)

        if(token==null){
            jwt.verify(token,process.env.SECRET, (err, decoded) => {
                if (!err) {
                  console.log(decoded);
                req.user = decoded;            
              }
            });
        }
        next();
    }
)

  
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/login",loginUser);
app.use("/api/orders",orderRouter);
//this is server side 
app.listen(5000, () =>{
    console.log ("server is running on port 5000")
}) 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import { loginUser } from './controllers/userController.js';
import orderRouter from './routes/orderRouter.js';
//express,bodyparser,mongoose are libraries

dotenv.config();
const app = express();
const mongoUrl = process.env.MONGO_DB_URI;

// Connect to the database
mongoose.connect(mongoUrl, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connected");
});

// Middleware for parsing JSON (turn correct path)
app.use(bodyParser.json());

// Authentication Middleware
app.use((req, res, next) => {
  let token = req.headers["authorization"]?.replace("Bearer ", "");
  console.log("Token:", token);
  
  if (token) {
    // Remove extra quotes if present
    token = token.replace(/^"(.*)"$/, '$1');
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.error("Token verification error:", err);
        return res.status(401).json({ message: "Invalid token" });
      }
      console.log("Decoded token:", decoded);
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/login", loginUser);
app.use("/api/orders", orderRouter);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

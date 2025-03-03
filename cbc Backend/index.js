import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";

dotenv.config();

const app = express();
const mongoUrl = process.env.MONGO_DB_URI;

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => console.log("Database connected"));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Authentication Middleware
app.use((req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token) {
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (!error) req.user = decoded;
    });
  }
  next();
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));

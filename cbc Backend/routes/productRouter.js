import express from "express";
import { createProduct, deleteProduct, getProduct, getProductByName } from "../controllers/productController.js"; // Ensure this path is correct

const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.get("/:name",getProductByName);
productRouter.post("/", createProduct);
productRouter.delete("/:name", deleteProduct);

export default productRouter;
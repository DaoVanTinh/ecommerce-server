import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.Controller.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public
router.get("/products", getProducts);
router.get("/products/:id", getProductById);

// Admin
router.post("/products", isAdmin, createProduct);
router.put("/products/:id", isAdmin, updateProduct);
router.delete("/products/:id", isAdmin, deleteProduct);

export default router;

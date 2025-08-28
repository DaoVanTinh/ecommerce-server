import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getNewProducts,
  getRandomProducts,
} from "../controllers/product.Controller.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/new", getNewProducts);
router.get("/products/random", getRandomProducts);
router.get("/products/:id", getProductById);

router.post("/products", isAdmin, createProduct);
router.put("/products/:id", isAdmin, updateProduct);
router.delete("/products/:id", isAdmin, deleteProduct);

export default router;

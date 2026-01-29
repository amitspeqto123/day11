import express from "express"
import { createProduct, deleteProduct, getAllProduct } from "../controller/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/create", isAuthenticated, isAdmin, createProduct);
router.get("/all", isAuthenticated, getAllProduct);
router.get("/delete", isAuthenticated, isAdmin, deleteProduct);

export default router;
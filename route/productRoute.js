import express from "express"
import { createProduct, deleteProduct, getAllProducts } from "../controller/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multerMiddleware.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  isAdmin,
  upload.single("image"),
  createProduct
);
router.get("/all", isAuthenticated, getAllProducts);
router.delete("/delete/:id", isAuthenticated, isAdmin, deleteProduct);

export default router;

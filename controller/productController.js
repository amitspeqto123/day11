import { Product } from "../model/product.js";
import { createProductService, getAllProductsService, deleteProductService } from "../service/productService.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, brand } = req.body;

    // multer image
    if (!req.file) {
      return res.status(400).json({ message: "Product image is required" });
    }

    const product = await createProductService({
      name,
      price,
      brand,
      image: req.file.filename,
      createdBy: req.session.user.id,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await getAllProductsService();

//     res.status(200).json({
//       count: products.length,
//       products,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getAllProducts = asyncHandler(async(req, res) =>{
  const products = await getAllProductsService();
  res.status(200).json(new ApiResponse({
    statusCode: 200,
    message: "Produt fetched successfully",
    total: products.length,
    data: products
  }))
})

export const deleteProduct = async (req, res) => {
  try {
    const product = await deleteProductService(req.params.id);

    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
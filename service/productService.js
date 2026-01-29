import { Product } from "../model/product.js";
import fs from "fs";
import path from "path"

export const createProductService = async (data) => {
  const { name, price, brand, image, createdBy } = data;

  // validation (service-level)
  if (!name || !price || !brand || !image) {
    throw new Error("All fields are required");
  }

  if (price <= 0) {
    throw new Error("Price must be greater than 0");
  }

  const product = await Product.create({
    name,
    price,
    brand,
    image,
    createdBy,
  });

  return product;
};
export const getAllProductsService = async () => {
  return await Product.find().sort({ createdAt: -1 });
};
export const deleteProductService = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }

  // delete image from uploads folder
  const imagePath = path.join("uploads", product.image);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  await product.deleteOne();
  return product;
};

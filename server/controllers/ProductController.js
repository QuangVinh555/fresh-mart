import Product from "../models/product.js";

const ProductController = {
  // [POST] /api/product/create
  create: async (req, res) => {
    const product = new Product(req.body);
    try {
      const newProduct = await product.save();
      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // [GET] /api/product
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default ProductController;

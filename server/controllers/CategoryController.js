import Category from "../models/Category.js";

const CategoryController = {
  // [POST] /api/category
  create: async (req, res) => {
    try {
      const category = new Category(req.body);
      const newCategory = await category.save();
      return res.status(200).json(newCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  // [GET] /api/category
  getAll: async (req, res) => {
    try {
      const category = await Category.find();
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default CategoryController;

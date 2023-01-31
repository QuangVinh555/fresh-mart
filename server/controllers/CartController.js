import Cart from "../models/cart.js";
import Product from "../models/product.js";

const CartController = {
  // [GET] /api/cart?userId
  getAll: async (req, res) => {
    try {
      const userId = req.query.userId;
      const cart = await Cart.find({ id_user: userId });
      const carts = await Promise.all(
        cart.map((item) => {
          return Product.findById(item.id_product);
        })
      );

      return res.status(200).json(carts);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // [POST] /api/cart/create
  create: async (req, res) => {
    try {
      const newCart = new Cart(req.body);
      const cart = await Cart.find({ id_product: req.body.id_product });
      cart.map((item) => {
        if (item.id_product === newCart.id_product) {
          newCart.count++;
        }
      });
      const savedCart = await newCart.save();
      return res.status(200).json(savedCart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // [DELETE] /api/cart/:id
  delete: async (req, res) => {
    try {
      const cart = await Cart.findOne({ id_product: req.params.id });
      await cart.deleteOne();
      return res.status(200).json("Đã xóa sản phẩm thành công");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
export default CartController;

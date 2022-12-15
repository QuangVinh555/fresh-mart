import Cart from "../models/cart.js";

const CartController = {
  // [GET] /api/cart/:id
  get: async (req, res) => {},

  // [POST] /api/cart/create
  create: async (req, res) => {
    try {
      const newCart = new Cart(req.body);
      await newCart.save();
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
export default CartController;

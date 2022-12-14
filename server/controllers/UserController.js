import User from "../models/user.js";

const UserController = {
  // [GET] /api/user/:id
  getAll: async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // [GET] /api/user/:id
  get: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // [PUT] /api/user/:id
  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // [DELETE] /api/user/:id
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Đã xóa user thành công");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
export default UserController;

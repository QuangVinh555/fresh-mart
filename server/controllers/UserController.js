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
};
export default UserController;

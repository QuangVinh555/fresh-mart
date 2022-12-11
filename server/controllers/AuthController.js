import User from "../models/user.js";
import bcrypt from "bcrypt";

const UserController = {
  // [POST] /api/auth/register
  register: async (req, res, next) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      return res.status(200).json(savedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("Không có user nào có email này!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        return res.status(200).json("Đăng nhập thành công");
      } else {
        return res.status(404).json("Sai mật khẩu!");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default UserController;

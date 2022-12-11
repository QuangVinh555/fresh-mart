import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/fresh-mark");
    console.log("Connect successfully!");
  } catch (error) {
    console.log("Connect failed!");
    process.exit(1); // Thoát khỏi kết nối
  }
};

export default connectDB;

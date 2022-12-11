import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connect.js";
import route from "./routes/index.js";

const app = express();

// middleware
app.use(express.json());

// connect
mongoose.set("strictQuery", true);
connectDB();

// route
route(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

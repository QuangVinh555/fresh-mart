import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connect.js";
import route from "./routes/index.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// connect
mongoose.set("strictQuery", true);
connectDB();

// route
route(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

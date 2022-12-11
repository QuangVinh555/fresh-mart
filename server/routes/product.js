import express from "express";
import ProductController from "../controllers/ProductController.js";
const router = express.Router();

router.post("/create", ProductController.create);

export default router;

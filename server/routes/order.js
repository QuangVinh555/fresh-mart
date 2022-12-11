import express from "express";
import OrderController from "../controllers/OrderController.js";
const router = express.Router();
router.get("/:id", OrderController.get);

export default router;

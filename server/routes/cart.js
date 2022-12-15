import express from "express";
import CartController from "../controllers/CartController.js";
const router = express.Router();
router.post("/create", CartController.create);
router.get("/:id", CartController.get);
export default router;

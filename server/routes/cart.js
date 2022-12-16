import express from "express";
import CartController from "../controllers/CartController.js";
const router = express.Router();
router.delete("/:id", CartController.delete);
router.post("/create", CartController.create);
router.get("/", CartController.getAll);
export default router;

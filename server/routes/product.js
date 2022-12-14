import express from "express";
import ProductController from "../controllers/ProductController.js";
const router = express.Router();

router.delete("/:id", ProductController.delete);
router.post("/create", ProductController.create);
router.get("/:id", ProductController.get);
router.get("/", ProductController.getAll);

export default router;

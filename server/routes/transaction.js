import express from "express";
import TransactionController from "../controllers/TransactionController.js";
const router = express.Router();
router.get("/:id", TransactionController.get);
export default router;

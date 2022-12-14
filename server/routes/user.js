import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";

router.delete("/:id", UserController.delete);
router.put("/:id", UserController.update);
router.get("/:id", UserController.get);
router.get("/", UserController.getAll);

export default router;

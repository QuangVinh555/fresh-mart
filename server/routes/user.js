import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";

router.get("/", UserController.getAll);

export default router;

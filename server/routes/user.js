import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";

router.get(":/id", UserController.get);

export default router;

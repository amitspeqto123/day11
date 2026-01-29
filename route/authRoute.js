import express from "express";
import { login, logout, signup } from "../controller/authController.js";

const router = express.Router();

router.post("/signup-session", signup);
router.post("/login-session", login);
router.get("/logout-session", logout);

export default router;
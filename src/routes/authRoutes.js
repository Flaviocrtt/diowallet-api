import { Router } from "express";
import authController from "../controllers/authController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";
const authRoutes = Router();

authRoutes.post("/signup", authController.signup);
authRoutes.post("/signin", authController.signin);
authRoutes.get("/me", authMiddleware, authController.LoggedUser);

export default authRoutes;
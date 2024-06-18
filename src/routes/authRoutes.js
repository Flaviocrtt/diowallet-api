import { Router } from "express";
import authController from "../controllers/authController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";
import {validationSchemaMiddleware} from "../middlewares/validationSchemaMiddleware.js";
import { AuthUser } from "../schemas/validation/AuthUser.js";
import { CreateUser } from "../schemas/validation/CreateUser.js";
const authRoutes = Router();

authRoutes.post("/signup", validationSchemaMiddleware(CreateUser), authController.signup);
authRoutes.post("/signin", validationSchemaMiddleware(AuthUser), authController.signin);
authRoutes.get("/me", authMiddleware, authController.LoggedUser);

export default authRoutes;
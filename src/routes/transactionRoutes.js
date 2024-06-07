import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddlares } from "../middlewares/authMiddleware.js";

const transactionRoutes = Router();

transactionRoutes.post(
    "/transaction", 
    authMiddlares,
    transactionController.create
);

export default transactionRoutes;
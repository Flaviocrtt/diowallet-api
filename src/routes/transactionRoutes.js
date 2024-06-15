import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionRoutes = Router();

transactionRoutes.use(authMiddleware);

transactionRoutes.post(
    "/transaction", 
    transactionController.create
);

transactionRoutes.get(
    "/transactions", 
    transactionController.findAllByUser
);

export default transactionRoutes;
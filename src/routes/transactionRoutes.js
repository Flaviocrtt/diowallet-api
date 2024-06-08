import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddlewares } from "../middlewares/authMiddleware.js";

const transactionRoutes = Router();

transactionRoutes.use(authMiddlewares);

transactionRoutes.post(
    "/transaction", 
    transactionController.create
);

transactionRoutes.get(
    "/transactions", 
    transactionController.findAllByUser
);

export default transactionRoutes;
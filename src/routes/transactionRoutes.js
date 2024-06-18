import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRoutes = Router();

transactionRoutes.use(authMiddleware);

transactionRoutes.post(
    "/transaction", 
    validationSchemaMiddleware(CreateTransaction),
    transactionController.create
);

transactionRoutes.get(
    "/transactions", 
    transactionController.findAllByUser
);

export default transactionRoutes;
import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRoutes = Router();

transactionRoutes.use(authMiddleware);

transactionRoutes.post(
    "/create", 
    validationSchemaMiddleware(CreateTransaction),
    transactionController.create
);

transactionRoutes.get(
    "/get/:id",
    transactionController.get
);

transactionRoutes.put(
    "/update/:id",
    transactionController.update
);

transactionRoutes.delete(
    "/delete/:id", 
    transactionController.remove
);

transactionRoutes.get(
    "/list", 
    transactionController.findAllByUser
);

export default transactionRoutes;
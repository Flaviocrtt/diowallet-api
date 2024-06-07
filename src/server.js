import express, { json } from 'express';
import { connectDb } from './config/database.js';
import "dotenv/config";
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';

const app = express();
connectDb();
app.use(json());
app.get("/", (req, res)=>{
    res.send("Teste");
});
app.use(authRoutes);
app.use(transactionRoutes)

const port = process.env.PORT;
app.listen(port, ()=> console.log(`server listening in port ${port}`));
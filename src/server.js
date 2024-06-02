import express, { json } from 'express';
import authRoutes from './routes/authRoutes.js';
import { connectDb } from './config/database.js';
import "dotenv/config";

const app = express();
connectDb();
app.use(json());
app.get("/", (req, res)=>{
    res.send("Teste");
});
app.use(authRoutes);

const port = process.env.PORT;
app.listen(port, ()=> console.log(`server listening in port ${port}`));
import express, { json } from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(json());
app.get("/", (req, res)=>{
    res.send("Teste");
});

app.use(authRoutes);

app.listen(3000, ()=> console.log("server linstening on port 3000"));
import jwt from "jsonwebtoken";
import "dotenv/config"
import authRepository from "../repositories/authRepository.js";


export async function authMiddlares(req, res, next){

    const {authorization} = req.headers;
    if(!authorization) res.status(401).send({message: "Invalid token"});
    const parts = authorization.split(" ");
    if(parts.length != 2) res.status(401).send({message: "Invalid token"});

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)) res.status(401).send("Invalid token");

    jwt.verify(token, process.env.SECRET, async (err, decode) => {

        if(err) res.status(401).send({message: "Invalid token"});
        if(!decode) res.status(401).send({message: "Invalid token"});

        const user = await authRepository.findById( decode.id);
        if (!user) res.status(401).send({message: "Invalid token"});

        res.locals.user = user;
        next();
    });

}
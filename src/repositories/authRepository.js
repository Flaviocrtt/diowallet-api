import UserSchema from "../schemas/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config"

async function create(data){
    return await UserSchema.create(data);
}

async function findByEmail(email){
    return await UserSchema.findOne({email});
}

async function findById(id){
    return await UserSchema.findById( id );
}

function generateToken(id){
    return jwt.sign({id}, process.env.SECRET, {expiresIn: 86400});
}

export default {
    create,
    findByEmail,
    findById,
    generateToken
}
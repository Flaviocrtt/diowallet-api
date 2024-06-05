import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";


async function signup(body){
    const hashPassword =    bcrypt.hashSync(body.password, 10);

    const userExists = await authRepository.findByEmail(body.email);
    if (userExists) throw new Error("User email already exists");

    return await authRepository.create({...body, password: hashPassword});
}

async function signin(body){
    const userExists = await authRepository.findByEmail(body.email);
    if(!userExists) throw new Error('email or password incorrect');

    const passwordOk = bcrypt.compareSync(body.password, userExists.password);
    if(!passwordOk) throw new Error('email or password incorrect!');

    return authRepository.generateToken(userExists._id);
}
export default {
    signup,
    signin
}
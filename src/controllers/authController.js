import authService from "../services/authService.js"

async function signup(req, res){
    const body = req.body;

    try{
        const result = await authService.signup(body);
        res.status(201).send(result);
    }catch(err){
        res.status(409).send(err.message);
    }
}
async function signin(req, res){
    const body = req.body;

    try{
        const token = await authService.signin(body);
        return res.send(token);
    }catch(err){
        return res.status(401).send(err.message);
    }
}

async function LoggedUser(req, res){
    const { _id: id } = res.locals.user

    try{
        const user = await authService.LoggedUser(id);
        return res.send(user);
    }catch(err){
        return res.status(441).send(err.message);
    }
}

export default {
    signup, 
    signin,
    LoggedUser
}
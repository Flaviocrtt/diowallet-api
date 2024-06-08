import transactionRepository from "../repositories/transactionRepository.js";

async function create(data, id){
    if(!id) throw new Error("User id required");
    return await transactionRepository.create({...data, userId: id});
}

async function findAllByUser(id){
    if(!id) throw new Error("User id required");
    return await transactionRepository.findAllByUser(id);
}

export default {
    create,
    findAllByUser
}
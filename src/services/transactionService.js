import transactionRepository from "../repositories/transactionRepository.js";

async function create(data, userId){
    if(!userId) throw new Error("User id required");
    return await transactionRepository.create({...data, userId: userId});
}

async function update(id, userId, data){
    if(!userId) throw new Error("User id required");
    return await transactionRepository.update(id, userId, data);
}

async function remove(id, userId){
    if(!userId) throw new Error("User id required");
    return await transactionRepository.remove(id, userId);
}

async function get(id){
    if(!id) throw new Error("Transaction id required");
    return await transactionRepository.findOne(id);
}

async function findAllByUser(id){
    if(!id) throw new Error("User id required");
    return await transactionRepository.findAllByUser(id);
}

export default {
    create,
    findAllByUser,
    get,
    update,
    remove
}
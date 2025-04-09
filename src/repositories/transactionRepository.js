import TransactionSchema from "../schemas/Transaction.js";

async function create(data){
    return await TransactionSchema.create(data);
}

async function findAllByUser(id){
    return await TransactionSchema.find({userId: id});
}

async function findOne(id){
    return await TransactionSchema.findOne({_id: id});
}

async function update(id, userId, data){
    return await TransactionSchema.updateOne({_id: id, userId: userId}, data);
}

async function remove(id, userId){
    return await TransactionSchema.deleteOne({_id: id, userId: userId});
}

export default {
    create,
    findAllByUser,
    findOne,
    update,
    remove
}


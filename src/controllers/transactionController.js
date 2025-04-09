import transactionService from "../services/transactionService.js";

async function create(req, res){
    const body = req.body;
    const {_id: id} = res.locals.user;

    try {
        const result = await transactionService.create(body, id);
        return res.status(201).send(result);
    } catch (error) {
        return res.status(409).send(error.message);
    }
}

async function findAllByUser(req, res){
    const {_id: id} = res.locals.user;

    try {
        const transactions = await transactionService.findAllByUser(id);
        return res.status(200).send(transactions);
    } catch (error) {
        return res.status(409).send(error.message);
    }
}

async function get(req, res){

    try {
        const transactions = await transactionService.get(req.params.id);
        return res.status(200).send(transactions);
    } catch (error) {
        return res.status(409).send(error.message);
    }
}

async function update(req, res){
    const id = req.params.id;
    const {_id: userId} = res.locals.user;
    const data = req.body;

    try {
        const result = await transactionService.update(id, userId, data);
        return res.status(202).send(result);
    } catch (error) {
        return res.status(409).send(error.message);
    }
}

async function remove(req, res){
    const id = req.params.id;
    const {_id: userId} = res.locals.user;

    try {
        const result = await transactionService.remove(id, userId);
        return res.status(202).send(result);
    } catch (error) {
        return res.status(409).send(error.message);
    }
}

export default {
    create,
    findAllByUser,
    get,
    update,
    remove
}
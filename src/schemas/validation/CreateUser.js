import Joi from "joi";

export const CreateUser = Joi.object({
    name: Joi.string().required().min(3),
    emai: Joi.object(),
    password: Joi.string().required().min(3),
    createdAt: Joi.string(),
});

const Joi = require('joi');


exports.addUserValidate = (body) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        max: Joi.number().min(2).default(5).optional()
    });

    return schema.validate(body);
}

exports.updateUserValidate = (body) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        score: Joi.number().required(),
    });

    return schema.validate(body);
}
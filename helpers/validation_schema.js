const Joi = require("@hapi/joi")

const authSchema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(3).required(),
})

module.exports = {
    authSchema,
}
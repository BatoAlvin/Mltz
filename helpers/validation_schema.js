const Joi = require("@hapi/joi")

const authSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().min(3).required(),
})

module.exports = {
    authSchema,
}
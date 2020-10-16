const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 14
    },

    email: {
        type: String,
        min: 4,
        max: 14
    },

    password: {
        type: String,
        min: 4,
        max: 14
    },
    date: {
        type: Date,
        default: Date.now
    },
    question: {
        type: String,
    },
});


module.exports = mongoose.model('User', userSchema);
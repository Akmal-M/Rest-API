const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    married: {
        type: Boolean,
        required: true
    },

    registrationDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', userSchema)
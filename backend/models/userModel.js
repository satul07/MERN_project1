const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter a user name']
    },
    password : {
        type: String,
        required: [true, 'Please enter password']
    },
    email : {
        type: String,
        required: [true, 'Please enter an email id'],
        unique: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
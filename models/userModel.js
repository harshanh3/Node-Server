const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true

    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true

    },
    password: {
        type: String,
        require: true
    },
    phoneno: {
        type: String,
        require: true
    }

})
 const users = mongoose.model("users",userSchema)
 module.exports = users;
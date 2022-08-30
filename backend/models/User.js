const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    email: {
        type : String,
        required: true,
        toUpperCase : true,
        unique : true
    },
    password : {
        type : String,
        required: true,
    }, 
    favoris : {
        type : [String]
    },
    role: {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    },
    picture : {
        type : String,
        default :"./img/user.png"
    }
})

module.exports  = mongoose.model("User", userSchema)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true,
    },
    email: {
        type : String,
        require: true,
        toUpperCase : true,
        unique : true
    },
    password : {
        type : String,
        require: true,
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
        type : [String]
    }
})

module.exports  = mongoose.model("User", userSchema)
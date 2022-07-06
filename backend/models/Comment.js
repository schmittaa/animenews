const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentaire: {
        type : String,
        require: true,
    },
    like : Number,
    dislike : Number
    //user
})

module.exports  = mongoose.model("Comment", commentSchema)
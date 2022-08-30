const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentaire: {
        type : String,
        require: true,
    },
    date :{
        type : Date, 
        default: Date.now 
    } ,
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    newsId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'News'
    }
})

module.exports  = mongoose.model("Comment", commentSchema)
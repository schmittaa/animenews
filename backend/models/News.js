const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    message : {
        type : [String],
        required:true
    },
    anime : {
        type : [String],
    },
//date
    //comment 
    like : Number,
    dislike :Number
})

module.exports = mongoose.model('News', newsSchema)
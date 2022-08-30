const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    message : {
        type : String,
        required:true
    },
    anime : {
        type : String,
    },
    date :{
        type : Date, 
        default: Date.now
    } 
    //comment 
   
})

module.exports = mongoose.model('News', newsSchema)
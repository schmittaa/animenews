const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    title: {
        type : String,
        require: true,
    },
    description :{
        type : String,
        require: true,
    },
    poster:{
        type : String,
        require: true,
    },
    rate :{
        type : Number,
        require: true,
    },
    frameUrl :{
        type : String,
    },
    date :{
        type : Date,
    }  

})

module.exports  = mongoose.model("Anime", animeSchema)
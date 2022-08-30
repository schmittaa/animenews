const mongoose = require ('mongoose') ;
require('dotenv').config();

const database = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected")
        
    } catch (error) {
        console.log("DB cannot connect")
        console.log(error)
    }
};

module.exports = database;
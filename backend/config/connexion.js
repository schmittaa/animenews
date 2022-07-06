const mongoose = require ('mongoose') ;
require('dotenv').config();

const database = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("DB connected")
        
    } catch (error) {
        console.log("DB cannot connect")
    }
};

module.exports = database;
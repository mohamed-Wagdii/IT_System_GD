const mongoose = require("mongoose");

async function dbconnection(){
    try {
        
        await mongoose.connect(process.env.DB_URL);
        console.log("db connected");
        
    } catch (error) {
        console.log(error)
    };
    
    dbconnection(); 
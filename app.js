require("dotenv").config();

const express = require ("express");
const app = express();
const mongoose = require ("mongoose");

const dbconnection = ""


app.use(express.json());




    
    
    
    

    
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));
    

    
    
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`server is running at port ${port}`)}
);

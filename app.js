require("dotenv").config();

const mongoose = require ("mongoose");
const express = require ("express");
const app = express();


app.use(express.json());


const port = process.env.PORT || 3000;


async function dbconnection(){
try {
    
await mongoose.connect(process.env.DB-URL );
console.log("connected");

} catch (error) {
    console.log(error)
};

dbconnection();




const authRoutes =require("./routers/authRoutes");
app.use("/api",authRoutes);











app.listen(port, ()=> {
    console.log("server is running at port ${port} ")}
);

}
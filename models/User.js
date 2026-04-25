const mongoose = require("mongoose");
const userSchema = new mongoose.Schema ({
name:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
}, 
password:{
    type:Number,
    required:true,
    min:6
}, 
role:{
    type:String,
        enum:[" User","admin"],
        default:" User"
    }, 
department:{
     type:String,
    required:true
},





},{timestamps:true});


const User = mongoose.model("User",userSchema);
module.exports=User;
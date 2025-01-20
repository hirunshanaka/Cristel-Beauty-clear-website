import mongoose from "mongoose"
//create database model
const userSchema =mongoose.Schema({
    email:{
        type:String,
        required:true, 
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{ 
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    type:{
        type:String,
        default:"customer"
    },
    profilepicture:{
        type:String,
        default:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1732692503~exp=1732696103~hmac=1cf491153b4dd00ffdcece5daa4e3009300776aacc7a6298c12e63d713eee3ee&w=740"
    }
})
//crete the model
const User = mongoose.model("users",userSchema);
export default User
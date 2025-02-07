import mongoose from "mongoose";

const productSchema =mongoose.Schema({
    productID :{
        type:String,
        required:true,
        unique:true
    },
    productName:{
        type:String,
        required:true
        },
    altName:[
        {
            type:String,
        }
    ],
    images:[
        {
            type:String,
        }
    ],
    }
)
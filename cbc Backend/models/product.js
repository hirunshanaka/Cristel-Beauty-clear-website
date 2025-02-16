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
    price:{
        type:Number,
        required:true
    },
    lastPrice:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        required:true
    }
})
const Product = mongoose.model("products",productSchema)
    
export default Product;
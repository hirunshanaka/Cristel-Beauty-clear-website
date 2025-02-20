import Order from "../models/order.js";
import { iscustomer } from "./userController.js";

export async function createOrder(req,res){
    if(!iscustomer){
        res.json({
            message:"Please log in as a customer to create an order"
        })
    }
try{
 const latestOrder = await Order.find().sort
 ({date : -1}).limit(1);
 let orderId
 if (latestOrder.length ==0){
    orderId ="CBC0001"
 }else{
    const currentOrderId=latestOrder[0].orderId;
    const numberString=currentOrderId.replace("CBC","");
    const number =parseInt(numberString);
    const newNumber= (number+1).toString().padStart(4,"0");
    orderId= "CBC"+newNumber; 
 }
 const newOrderData=req.body;
 newOrderData.orderId=orderId;
 newOrderData.email=req.user.email; 

 //create new order and after save 
 const order = new Order(newOrderData)
 await order.save();
 res.json({
        message:"Order created"
 })
}
catch(error){
    res.status(500).json({
        message:error.message
    })
}
}
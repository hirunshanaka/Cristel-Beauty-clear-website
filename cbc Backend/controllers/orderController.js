import Order from "../models/order.js";
import Product from "../models/product.js";
import { isAdmin, isCustomer } from "./userController.js";

export async function createOrder(req, res) {
  
  if (!isCustomer(req)) {
    return res.json({
      message: "Please login as customer to create orders",
    });
  }

  try {
    const latestOrder = await Order.find().sort({ orderId: -1 }).limit(1);
    let orderId;

    if (latestOrder.length == 0) {
      orderId = "CBC0001";
    } else {
      const currentOrderId = latestOrder[0].orderId;
      const numberString = currentOrderId.replace("CBC", "");
      const number = parseInt(numberString);
      const newNumber = (number + 1).toString().padStart(4, "0");
      orderId = "CBC" + newNumber;
    }

    const newOrderData = req.body;
    const newProductArray = [];

    for (let i = 0; i < newOrderData.orderedItems.length; i++) {
      const product = await Product.findOne({
        productId: newOrderData.orderedItems[i].productId,
      });

      if (product==null) {
        return res.json({
          message:
            "Product with id " +
            newOrderData.orderedItems[i].productId +
            " not found",
        });
      }

      newProductArray[i] = {
        /*productId: product.productId,*/
        name: product.productName,
        price: product.lastPrice,
        quantity: newOrderData.orderedItems[i].quantity,
        image: product.images[0],
      };
    }

    newOrderData.orderedItems = newProductArray;
    newOrderData.orderId = orderId;
    newOrderData.email = req.user.email;

    const order = new Order(newOrderData);
    const saveOrder = await order.save();

    return res.json({
      message: "Order is created",
      order: saveOrder
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function getOrders(req, res) {
  try {
    if(isCustomer(req)){
      const orders = await Order.find({ email: req.user.email });
      res.json(orders);
      return
    }else if(isAdmin(req)){
      const orders = await Order.find({})
      res.json(orders);
      return
    }else{
      res.json({
        message:"Please Login ro view the orders" 
      })
    }
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
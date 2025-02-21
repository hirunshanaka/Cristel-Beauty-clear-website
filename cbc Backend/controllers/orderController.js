import Order from "../models/order.js";
import { iscustomer } from "./userController.js";

export async function createOrder(req, res) {
  // Verify that the user is logged in as a customer
  if (!iscustomer(req.user)) {
    return res.json({
      message: "Please log in as a customer to create an order"
    });
  }
  
  try {
    // Get the latest order to generate a new orderId
    const latestOrder = await Order.find().sort({ date: -1 }).limit(1);
    let orderId;
    if (latestOrder.length === 0) {
      orderId = "CBC0001";
    } else {
      const currentOrderId = latestOrder[0].orderId;
      const numberString = currentOrderId.replace("CBC", "");
      const number = parseInt(numberString);
      const newNumber = (number + 1).toString().padStart(4, "0");
      orderId = "CBC" + newNumber;
    }

    const newOrderData = req.body;
    newOrderData.orderId = orderId;
    newOrderData.email = req.user.email;

    // Create and save the new order
    const order = new Order(newOrderData);
    await order.save();
    
    res.json({
      message: "Order created"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

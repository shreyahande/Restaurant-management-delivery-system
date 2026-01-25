import express from 'express';
import authMiddleware from "../middleware/auth.js";
import {listOrders, placeOrder, updateOrderStatus, userOrders, verifyPayment} from "../controllers/orderController.js";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.get("/verify", verifyPayment);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post('/updatestatus', updateOrderStatus);

export default orderRouter;
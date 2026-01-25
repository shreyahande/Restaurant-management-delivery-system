import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5173";

    try{
        console.log("Order items received:", JSON.stringify(req.body.orderData.items, null, 2));
        
        const newOrder = new orderModel({
            userId: req.user.id,
            items: req.body.orderData.items,
            amount: req.body.orderData.amount,
            address: req.body.orderData.address
        })

        console.log("Order to be saved:", JSON.stringify(newOrder, null, 2));
        
        await newOrder.save();

        console.log("Order saved with ID:", newOrder._id);

        const line_items = req.body.orderData.items.map((item )=> ({
            price_data:{
                currency: 'inr',
                product_data:{
                    name: item.name
                },
                unit_amount: item.price *100,
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data:{
                currency: 'inr',
                product_data:{
                    name: 'Delivery Charges'
                },
                unit_amount: 50*100,
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })
        res.json({success: true, session_url: session.url})

    }catch (error){
        console.log("Order placement error:", error);
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            return res.json({success: false, message: 'Validation Error', errors: errorMessages});
        } else if (error.name === 'MongoError' && error.code === 11000) {
            return res.json({success: false, message: 'Duplicate Entry Error'});
        } else if (error.type === 'StripeError') {
            return res.json({success: false, message: `Payment Error: ${error.message}`});
        }
        
        res.json({success: false, message: 'An error occurred while processing your order'});
    }
}

const verifyPayment = async (req, res) => {
    try {
        const { orderId, success } = req.query;

        const order = await orderModel.findById(orderId);
        
        if (!order) {
            return res.json({ success: false, message: 'Order not found' });
        }

        if (success === 'true') {
            order.payment = true;
            await order.save();

            await userModel.findByIdAndUpdate(order.userId, { cartData: {} });
            
            return res.json({ 
                success: true, 
                message: 'Payment successful', 
                order 
            });
        } else {
            return res.json({ 
                success: false, 
                message: 'Payment was not completed', 
                order 
            });
        }
    } catch (error) {
        console.log("Payment verification error:", error);
        res.json({ success: false, message: 'An error occurred during payment verification' });
    }
};

const userOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'An error occurred while loading your orders' });
    }
}

// admin panel orders
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'An error occurred while loading orders' });
    }
}

// update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        
        if (!orderId || !status) {
            return res.json({ success: false, message: 'Order ID and status are required' });
        }
        
        const order = await orderModel.findById(orderId);
        
        if (!order) {
            return res.json({ success: false, message: 'Order not found' });
        }
        
        order.status = status;
        await order.save();
        
        return res.json({ 
            success: true, 
            message: 'Order status updated successfully', 
            order 
        });
    } catch (error) {
        console.log("Order status update error:", error);
        res.json({ success: false, message: 'An error occurred while updating order status' });
    }
};

export {placeOrder, verifyPayment, userOrders, listOrders, updateOrderStatus};
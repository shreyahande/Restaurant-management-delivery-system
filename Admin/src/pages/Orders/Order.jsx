import React, {useEffect, useState} from "react";
import './Order.css'
import {toast} from "react-toastify";
import axios from "axios";

const Order = ({ url }) => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // Define status options
    const statusOptions = [
        "Food Processing",
        "Out for Delivery",
        "Delivered",
        "Cancelled"
    ];

    const fetchAllOrders = async ()=>{
        try {
            setLoading(true);
            const response = await axios.get(url+"/api/order/list");
            if (response.data.success) {
                setOrders(response.data.data);
                console.log(response.data.data);
            }
            else{
                toast.error("Error fetching orders");
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            toast.error("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    }

    // Function to handle status change
    const handleStatusChange = async (orderId, newStatus) => {
        try {
            setLoading(true);
            const response = await axios.post(url + "/api/order/updatestatus", {
                orderId,
                status: newStatus
            });
            
            if (response.data.success) {
                // Update the orders state with the new status
                setOrders(orders.map(order => 
                    order._id === orderId 
                        ? { ...order, status: newStatus } 
                        : order
                ));
                toast.success("Order status updated successfully");
            } else {
                toast.error(response.data.message || "Failed to update order status");
            }
        } catch (error) {
            console.error("Error updating order status:", error);
            toast.error("An error occurred while updating order status");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    return (
        <div className="orders-container">
            <h2>Order Page</h2>
            {loading && <div className="loading-indicator">Loading...</div>}
            {!loading && orders.length === 0 ? (
                <p>No orders found</p>
            ) : (
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Status</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>
                                    {order.items.map((item, index) => (
                                        <div key={index}>
                                            {item.name} x {item.quantity}
                                        </div>
                                    ))}
                                </td>
                                <td>₹{order.amount}</td>
                                <td className={order.payment ? "payment-status-paid" : "payment-status-pending"}>
                                    {order.payment ? "Paid" : "Pending"}
                                </td>
                                <td className="order-status">
                                    <select 
                                        value={order.status || "Food Processing"} 
                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                        className="status-select"
                                        disabled={loading}
                                    >
                                        {statusOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    {order.address && typeof order.address === 'object' ? (
                                        <div className="address-details">
                                            <div>{order.address.firstName} {order.address.lastName}</div>
                                            <div>{order.address.email}</div>
                                            <div>{order.address.street}</div>
                                            <div>{order.address.city}, {order.address.state} {order.address.zipcode}</div>
                                            <div>{order.address.country}</div>
                                            <div>{order.address.phone}</div>
                                        </div>
                                    ) : (
                                        order.address || 'No address provided'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Order;
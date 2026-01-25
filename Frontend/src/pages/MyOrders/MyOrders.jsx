import React, {useContext, useEffect, useState} from 'react';
import './MyOrders.css';
import axios from "axios";
import {StoreContext} from "../../Context/StoreContext.jsx";
import {assets} from "../../assets/assets.js";

const MyOrders = () => {
    const {url, token} = useContext(StoreContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await axios.post(
                url+"/api/order/userorders", 
                {}, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            
            if (response.data.success) {
                setOrders(response.data.data);
            } else {
                setError(response.data.message || 'Failed to fetch orders');
            }
        } catch (err) {
            console.error('Error fetching orders:', err);
            setError('An error occurred while fetching your orders');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(token){
            fetchOrders();
        } else {
            setLoading(false);
            setError('Please login to view your orders');
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            
            {loading && (
                <div className="loading">
                    <p>Loading your orders...</p>
                </div>
            )}
            
            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
            
            {!loading && !error && orders.length === 0 && (
                <div className="no-orders">
                    <p>You haven't placed any orders yet.</p>
                </div>
            )}
            
            {!loading && !error && orders.length > 0 && (
                <div className="orders-list">
                    {orders.map((order) => (
                        <div key={order._id} className="order-item">
                            <img src={assets.parcel} alt="Parcel"/>
                            <p>{order.items.map((item,index)=>{
                                if(index === order.items.length-1){
                                    return item.name+" x "+item.quantity;
                                }else {
                                    return item.name+" x "+item.quantity+", ";
                                }
                            })}</p>
                            <p>₹{order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cF;</span><b>{order.status}</b></p>
                            <button>Track Order</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyOrders;
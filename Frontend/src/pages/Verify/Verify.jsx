import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Verify.css';
import { StoreContext } from '../../Context/StoreContext';

const Verify = () => {
    const [status, setStatus] = useState('loading');
    const [message, setMessage] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const { url } = useContext(StoreContext);

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const queryParams = new URLSearchParams(location.search);
                const success = queryParams.get('success');
                const orderId = queryParams.get('orderId');

                if (!orderId) {
                    setStatus('error');
                    setMessage('Invalid order information');
                    return;
                }

                const response = await axios.get(`${url}/api/order/verify?success=${success}&orderId=${orderId}`);

                if (response.data.success) {
                    setStatus('success');
                    setMessage('Payment successful! Your order has been placed.');
                } else {
                    setStatus('error');
                    setMessage('Payment was not completed. Your cart items have been preserved.');
                }

                setOrderDetails(response.data.order);
            } catch (error) {
                console.error('Verification error:', error);
                setStatus('error');
                setMessage('An error occurred during payment verification');
            }
        };

        verifyPayment();
    }, [location, url]);

    const handleContinueShopping = () => {
        navigate('/');
    };

    const handleViewOrders = () => {
        navigate('/order');
    };

    const handleTryAgain = () => {
        navigate('/cart');
    };

    return (
        <div className="verify-container">
            {status === 'loading' && (
                <div className="verify-loading">
                    <h2>Processing your payment...</h2>
                    <div className="loader"></div>
                </div>
            )}

            {status === 'success' && (
                <div className="verify-success">
                    <h2>Thank You!</h2>
                    <p>{message}</p>
                    {orderDetails && (
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <p>Order ID: {orderDetails._id}</p>
                            <p>Total Amount: ₹{orderDetails.amount}</p>
                        </div>
                    )}
                    <div className="verify-buttons">
                        <button onClick={handleContinueShopping}>Continue Shopping</button>
                        <button onClick={handleViewOrders}>View Orders</button>
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div className="verify-error">
                    <h2>Payment Not Completed</h2>
                    <p>{message}</p>
                    <div className="verify-buttons">
                        <button onClick={handleTryAgain}>Try Again</button>
                        <button onClick={handleContinueShopping}>Continue Shopping</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Verify;
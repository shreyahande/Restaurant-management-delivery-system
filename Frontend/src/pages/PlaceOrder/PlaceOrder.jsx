import React, {useContext, useEffect, useState} from "react";
import './PlaceOrder.css';
import { StoreContext } from "../../Context/StoreContext.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const PlaceOrder = () => {

    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    };


   const placeOrder = async (event) => {
       event.preventDefault();
       let orderItems = [];
       food_list.forEach((item) => {
           const quantity = cartItems[item._id] ;
           if (quantity > 0) {
               const itemInfo = { ...item, quantity };
               orderItems.push(itemInfo);
           }
       });

       let orderData = {
           userId: localStorage.getItem("userId"),
           address: data,
           items: orderItems,
           amount: getTotalCartAmount()+50,
       }
       let response = await axios.post(url+"/api/order/place", {orderData} ,{headers:{Authorization:`Bearer ${token}`}});
       if(response.data.success){
           const {session_url} = response.data;
           window.location.replace(session_url);
       }
       else{
           alert("Error");
       }
   };

   const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/cart');
        }
        else if(getTotalCartAmount()===0){
            navigate('/cart');
        }
    }, [token]);

    return (
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className='place-order-title'>Delivery Information</p>
                <div className="multi-fields">
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
                <input required name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
                <div className="multi-fields">
                    <input required name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
                    <input required name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
                </div>
                <div className="multi-fields">
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
                    <input required name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
                </div>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
            </div>

            <div className="place-order-right">
                <div className='cart-total'>
                    <div className='cart-total-item'>
                        <h2>Cart Totals</h2>
                        <div className='cart-total-detail'>
                            <div className='cart-total-details'>
                                <p>Subtotal:</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div>
                            <div className='cart-total-details'>
                                <p>Delivery Fee:</p>
                                <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
                        </div>
                        <hr />
                    </div>
                    <div className='cart-total-button'>
                        <button type='submit'>PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder;

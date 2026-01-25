import React, {useContext} from 'react';
import './Cart.css';
import {StoreContext} from "../../Context/StoreContext.jsx";
import {useNavigate} from "react-router-dom";

const Cart = () => {

    const {cartItems,food_list,removeFromCart, getTotalCartAmount, url} =useContext(StoreContext);

    const navigate = useNavigate();

    return(
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-item-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                {food_list.map((item) => {
                    if(cartItems[item._id]>0){
                        return (
                            <div className='cart-items-item'  key={item._id}>
                                <img src={url+"/images/"+item.image} alt='image' />
                                <p>{item.name}</p>
                                <p>₹{item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>₹{item.price*cartItems[item._id]}</p>
                                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='cart-bottom'>
                <div className='cart-promo-code'>
                    <div className='cart-promo-code-input'>
                        <input type="text" placeholder="Coupon Code" />
                        <button>Submit</button>
                    </div>
                </div>
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
                                <p>₹{getTotalCartAmount()===0?0:50}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
                        </div>
                        <hr/>
                    </div>
                    <div className='cart-total-button'>
                        <button onClick={()=>navigate('/placeorder')}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Cart;

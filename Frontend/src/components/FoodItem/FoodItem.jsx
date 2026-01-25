import React, {useContext} from "react";
import './FoodItem.css'
import {assets} from "../../assets/assets.js";
import {StoreContext} from "../../Context/StoreContext.jsx";

const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext) ;

    const count = cartItems?.[id] || 0;

    return (
        <div className='food-item'>
            <img className='food-item-img' src={url+"/images/"+image} alt="" />
            <div className='food-item-info'>
                <div className='food-item-name'>
                    <p>{name}</p>
                    <img src={assets.rating} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <div className='food-item-contain'>
                    <p className="food-item-price">₹{price}</p>
                    <div className="food-item-add">
                        {count === 0
                            ?(<button className='add' onClick={()=>addToCart(id)} >ADD</button>
                            ):(<div className='food-item-counter'>
                                <img className="add-remove-icon" onClick={()=>removeFromCart(id)} src={assets.minus_solid} alt="remove" />
                                <p>{count}</p>
                                <img className="add-remove-icon" onClick={()=>addToCart(id)} src={assets.plus_solid} alt="add" />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;

import React  from "react";
import './OrderDisplay.css'
import {order_display} from "../../assets/assets.js";

const OrderDisplay = ({setCategory}) => {
    return (
        <div className='order-display'>
            <h1>Explore Categories</h1>
            <div className="order-display-item-row">
                {order_display.map((item, index) => {
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.order_name?"All":item.order_name)} className="order-display-item" key={index}>
                            <img src={item.order_image} alt="order_image"/>
                            <p>{item.order_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderDisplay;

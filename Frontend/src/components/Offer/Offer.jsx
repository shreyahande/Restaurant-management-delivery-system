import React from 'react';
import './Offer.css';
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Offer = () => {
    return(
        <div className="offer">
            <h1>Our Best <span>Deals and Offers</span></h1>
            <div className="offer-items">
                <div className="offer-img">
                    <img src={assets.pattern} alt="patternt" />
                    <img src={assets.split_burger} alt="split_burger" />
                </div>
                <div className="offer-item">
                    <h1>The Loaded Burger</h1>
                    <p>The Big Fat Fatty burger is so much more than just a burger. It is layers of cheese,aloo tikki or chicken tikki, onions, and BBQ sauce, slow-smoked to tender, juicy perfection.</p>
                    <Link to='/order'><button>Order Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Offer

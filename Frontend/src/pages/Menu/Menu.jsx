import React from 'react';
import './Menu.css';
import {assets} from "../../assets/assets.js";

const Menu = () => {
    return(
        <div className="menu">
            <h1>Cafe Menu Card</h1>
            <div className='menu-content'>
                <div className='menu-right'>
                    <h2>Pizzas</h2>
                    <p>Mozzarella Pizza....<span>₹150</span></p>
                    <p>Mozzarella Pizza....<span>₹150</span></p>
                    <p>Veg Pizza....<span>₹180</span></p>
                    <p>Italian Pizza....<span>₹280</span></p>
                    <img src={assets.pizza_menu} alt='pizza_menu' />
                </div>
                <div className='menu-center'>
                    <img src={assets.burger_menu} alt='burger_menu' />
                    <h2>Burgers</h2>
                    <p>Veggie Burger....<span>₹230</span></p>
                    <p>Grilled Burger....<span>₹200</span></p>
                    <p>Chicken Burger....<span>₹260</span></p>
                    <p>BBQ Burger....<span>₹280</span></p>
                </div>
                <div className='menu-right'>
                    <h2>French Fries</h2>
                    <p>French Fries....<span>₹100</span></p>
                    <p>Salted Fries....<span>₹120</span></p>
                    <p>Peri-Peri Fries....<span>₹120</span></p>
                    <p>Cheese Fries....<span>₹160</span></p>
                    <img src={assets.fries_menu} alt='fries'/>
                </div>
                <div className='menu-center'>
                    <img src={assets.chicken_menu} alt='chicken_menu' />
                    <h2>Chicken</h2>
                    <p>Chicken skewers....<span>₹150</span></p>
                    <p>Chicken Leg....<span>₹160</span></p>
                    <p>Chicken Drum....<span>₹200</span></p>
                    <p>Chicken Fried....<span>₹200</span></p>
                    <p>Chicken fry....<span>₹220</span></p>
                </div>
            </div>
        </div>
    )
}

export default Menu;
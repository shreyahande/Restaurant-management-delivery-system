import React from 'react';
import './Header.css';
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Header = () => {

    return(
        <div className='header'>
            <div className="header-left">
                <img src={assets.icon} alt="TT-icon"/>
                <h1 className="action">Taste<span>Tales</span></h1>
                <p>Taste Tales, we blend flavors, fun, and a cozy atmosphere to make every visit a delicious memory. From cheesy pizzas and burgers to biryani, pasta, fries, coffee, and ice cream. We've got something for every craving. Come for the flavor, stay for the experience!</p>
                <div className="explore-menu">
                  <Link to='/menu'><button>Explore Menu</button></Link>
                </div>
            </div>
            <div className="header-right">
                <img src={assets.home_image} alt="home_image"/>
            </div>
        </div>
    )
}

export default Header

import React from "react";
import './Footer.css'
import {assets} from "../../assets/assets.js";

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-container">
                <div className='footer-content'>
                    <div className='footer-content-left'>
                        <h1 className="action">Taste<span>Tales</span></h1>
                        <p>Taste Tales, we blend flavors, fun, and a cozy atmosphere to make every visit a delicious memory. From cheesy pizzas and burgers to biryani, pasta, fries, coffee, and ice cream. We've got something for every craving. Come for the flavor, stay for the experience!</p>
                        <div className='footer-social-icons'>
                            <img src={assets.facebook} alt='logo' />
                            <img src={assets.twitter} alt='logo' />
                            <img src={assets.linkedin} alt='logo' />
                        </div>
                    </div>
                    <div className='footer-content-info'>
                        <div className='footer-content-center'>
                            <h2>COMPANY</h2>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div className='footer-content-right'>
                            <h2>GET IN TOUCH</h2>
                            <ul>
                                <li>+1-212-346-7890</li>
                                <i>contact@tastetale.com</i>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">Copyright 2024 © TasteTales.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
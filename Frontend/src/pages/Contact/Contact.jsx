import React from 'react';
import './Contact.css'
import {assets} from "../../assets/assets.js";

const Contact = () => {
    return (
        <div className='contact'>
            <div className="info-card">
                <img src={assets.home_icon} alt='home'/>
                <h3>VISIT US</h3>
                <p>You're always welcome at <br/>our office for inquiries or assistance.</p>
                <a href="https://maps.app.goo.gl/Z7NGyHc4o3dHUhRU8" target="_blank" rel="noopener noreferrer">
                    Mumbai, Maharashtra 400001
                </a>
            </div>
            <div className="info-card">
                <img src={assets.call} alt='call'/>
                <h3>CALL US</h3>
                <p> Feel free to contact us <br/> support or more information.</p>
                <a href="tel:+1-212-346-7890">+1-212-346-7890</a>
            </div>
            <div className="info-card">
                <img src={assets.message} alt='call'/>
                <h3>MASSAGE US</h3>
                <p>Send us an email <br/>anytime—we’re here to help.</p>
                <a href="mailto:contact@tastetale.com">contact@tastetale.com</a>
            </div>
        </div>
    )
}

export default Contact;
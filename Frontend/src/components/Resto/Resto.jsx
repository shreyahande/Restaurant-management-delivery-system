import React from 'react';
import './Resto.css';
import {assets} from "../../assets/assets.js";

const Resto = () => {
    return(
        <div className="resto-img">
            <div className="img-fluid">
                <img src={assets.resto_img} alt="resto_image"/>
                <img src={assets.resto3_img} alt="resto3_image"/>
            </div>
            <div className="img-fluids">
                <img src={assets.resto1_img} alt="resto1_image"/>
                <img src={assets.resto2_img} alt="resto2_image"/>
            </div>
        </div>
    )
}

export default Resto;
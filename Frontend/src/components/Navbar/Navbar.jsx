import React, {useContext, useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {StoreContext} from "../../Context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

    return(
        <div className='navbar'>
            <RouterLink to='/'><h1 className="action">Taste<span>Tales</span></h1></RouterLink>
            <ul className="nav-links">
                <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><RouterLink to="/">HOME</RouterLink></li>
                <li onClick={()=>setMenu("order")} className={menu==="order"?"active":""}><RouterLink to="/order">ORDER</RouterLink></li>
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><RouterLink to="/menu">MENU</RouterLink></li>
                <li onClick={()=>setMenu("book")} className={menu==="book"?"active":""}><RouterLink to="/book">BOOKING</RouterLink></li>
                <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}><RouterLink to="/contact">CONTACT</RouterLink></li>
            </ul>
            <div className="nav-icon">
                <RouterLink to="/search">
                    <img src={assets.search} alt="search" />
                </RouterLink>
                <RouterLink to="/cart">
                    <div className="nav-cart-bar">
                        <img src={assets.cart} alt="cart" />
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                </RouterLink>
                <RouterLink to="/myorders">
                    <img src={assets.user_icon} alt="search" />
                </RouterLink>
            </div>
            <div className="nav-right">
                {!token?<button onClick={()=>setShowLogin(true)} >Sign In</button>
                    :<div className="nav-profile">
                        <img src={assets.user} alt='user'/>
                        <ul className='nav-profile-dropdown'>
                            <li onClick={logout}><img src={assets.logout} alt='logout'/><p>Logout</p></li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}

export default Navbar

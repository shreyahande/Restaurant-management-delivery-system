import React, {useContext, useState} from "react";
import './Login.css'
import {assets} from "../../assets/assets.js";
import {StoreContext} from "../../Context/StoreContext.jsx";
import axios from "axios";

const Login = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext);

    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]: value}));
    }

    const onLogin = async (even) => {
        even.preventDefault();
        let newUrl = url;
        if(currState === "Login"){
            newUrl += '/api/user/login'
        }
        else{
            newUrl += '/api/user/register'
        }

        const response = await axios.post(newUrl, data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userId",response.data.userId);
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }


    return (
        <div className="login">
            <form onSubmit={onLogin} className='login-form'>
                <div className='login-form-title'>
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='Cross icon' />
                </div>
                <div className='login-form-input'>
                    {currState === "Login" ?<></>:<div  className='login-form-icon'>
                        <img src={assets.user_icon} alt='mail-icon' />
                        <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder="Your name " required />
                    </div>}
                    <div className='login-form-icon'>
                        <img src={assets.email_icon} alt='mail-icon' />
                        <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder="Your email " required />
                    </div>
                    <div className='login-form-icon'>
                        <img src={assets.lock_icon} alt='mail-icon' />
                        <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder="Password " required />
                    </div>
                </div>
                {currState==="Sign Up" ?<></>:<div className='login-forgot-password'>
                    <p>Forgot Password?</p>
                </div>}
                <button type='submit'>{currState==="Sign Up"?"Create account":"Submit"}</button>
                <div className='direct-login'>
                    {currState ==="Login"?<></>:<p>or Sign Up Using</p>}
                    {currState==="Sign Up"?<></>:<p>or Login Using</p>}
                    <div className='direct-login-icon'>
                        <img src={assets.google} alt='google' />
                        <img src={assets.facebook_color} alt='facebook' />
                        <img src={assets.twitter_color} alt='twitter' />
                    </div>
                </div>
                {currState==="Login"
                ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have a account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login;
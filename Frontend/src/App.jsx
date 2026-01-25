import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Order from "./pages/Order/Order.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import  Footer from './components/Footer/Footer.jsx'
import './App.css'
import Login from "./components/Login/Login.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Search from "./pages/Search/Search.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { ToastContainer } from 'react-toastify';
import Book from "./components/book/Book.jsx";
import Verify from "./pages/Verify/Verify.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
        {showLogin ?<Login setShowLogin={setShowLogin} />:<></>}
        <div className="App">
            <ToastContainer />
            <Navbar setShowLogin={setShowLogin} />
            <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/cart' element={<Cart/>}  />
                <Route path='/order' element={<Order/>}  />
                <Route path='search' element={<Search/>}  />
                <Route path='/book' element={<Book/>}  />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/placeorder' element={<PlaceOrder/>}  />
                <Route path='/contact' element={<Contact/>}  />
                <Route path='/verify' element={<Verify/>}  />
                <Route path='/myorders' element={<MyOrders/>}  />
            </Routes>
            <Footer />
        </div>
    </>
  )
}

export default App

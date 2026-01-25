import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Offer from "../../components/Offer/Offer.jsx";
import Resto from "../../components/Resto/Resto.jsx";
import Book from "../../components/book/Book.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";

const Home = () => {

    return(
        <div>
            <Header/>
            <Offer/>
            <Resto/>
            <Book/>
            <AppDownload />
        </div>
    )
}

export default Home

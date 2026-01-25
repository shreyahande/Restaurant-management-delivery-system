import React, {useContext, useState} from 'react';
import './Search.css'
import {assets} from "../../assets/assets.js";
import FoodItem from "../../components/FoodItem/FoodItem.jsx";
import { StoreContext } from "../../Context/StoreContext.jsx";

const Search = ({ category }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { food_list } = useContext(StoreContext);

    const filteredFood = food_list.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayList = searchTerm
        ? filteredFood
        : food_list.filter(item => category === "All" || category === item.category);


    return (
        <div className='search'>
            <div className='search-box'>
                <input
                    type="text"
                    placeholder="Search For Your Food"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={assets.search} alt="Search" />
            </div>

            <div className='food-display-list'>
                {displayList.length > 0 ? (
                    displayList.map((item, index) => {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    })
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default Search;

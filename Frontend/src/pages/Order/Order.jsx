import React ,{useState} from 'react';
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import OrderDisplay from "../../components/OrderDisplay/OrderDisplay.jsx";

const Order = () => {

    const [category,setCategory] = useState("All");

    return(
        <div>
            <OrderDisplay setCategory={setCategory} />
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Order;
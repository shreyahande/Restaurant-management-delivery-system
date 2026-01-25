import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const StoreContext = createContext({});

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems ] = useState({});
    const url = 'http://localhost:4000'
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);
    const [userId, setUserId] = useState("");

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        } else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
        if (token) {
            try {
                 const res = await axios.post(url+"/api/cart/adding", {itemId},{headers : {Authorization:`Bearer ${token}`}});

                if (res.data.success) {
                    setCartItems(res.data.cartData);
                } else {
                    console.error("Failed to fetch cart data:", res.data.message);
                }
            } catch (error) {
                    console.error("Error fetching cart:", error.message);
                }
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]: Math.max(0,prev[itemId]-1)}));
        if (token) {
            try {
                const res = await axios.post(url + "/api/cart/remove", { itemId }, {headers: { Authorization: `Bearer ${token}` }});
                if (res.data.success) {
                    setCartItems(res.data.cartData);
                }
            } catch (error) {
                console.error(" Error in removeFromCart:", error.message);
            }
        }
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            const product = food_list.find(p => p._id === item);
            if (product) {
                total += product.price * cartItems[item];
            }
        }
        return total;
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
        } catch (err) {
            console.error("Failed to fetch food list:", err.message);
        }
    }
    const loadCartData = async (token) => {
        const res = await axios.post(url + "/api/cart/get",{},  {headers: { Authorization: `Bearer ${token}` }});
        setCartItems(res.data.data);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);



    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        loadCartData,
        userId,
        setUserId
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
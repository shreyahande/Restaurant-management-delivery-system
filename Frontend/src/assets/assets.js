import search from './search_icon.png'
import cart from './bag_icon.png'
import home_image from './chicken-fry.png'
import icon from './Icon.png'
import rating from './rating_starts.png'
import minus_solid from './minus-solid.svg'
import plus_solid from './plus-solid.svg'
import split_burger from './split-burger.png'
import resto_img from './resto.jpg'
import resto1_img from './resto1.jpg'
import resto2_img from './resto2.jpg'
import resto3_img from './resto3.jpg'
import resto4_img from './resto4.png'
import pattern from './pattern.png'
import user from './circle-user.svg'
import logout from './logout.svg'
import parcel from './parcel_icon.png'

import left_arrow from './arrow_left.png'
import right_arrow from './arrow_right.png'
import cross_icon from './cross-icon.svg'
import email_icon from './email-icon.svg'
import lock_icon from './lock-icon.svg'
import user_icon from './user-icon.svg'

import facebook from './facebook_icon.png'
import twitter from './twitter-iocn.svg'
import linkedin from './linkedin_icon.png'

import home_icon from './home.png'
import call from './call.png'
import message from './email.png'

import facebook_color from './facebook-color.svg'
import twitter_color from './twitter-color.svg'
import google from './google-color.svg'

import play_store from './play_store.png'
import app_store from './app_store.png'

import pizza_menu from './pizza_menu.jpg'
import chicken_menu from './chicken_menu.png'
import fries_menu from './fries_menu.png'
import burger_menu from './burgers_menu.jpg'

import burger_display from './burger-cartoon-icon.png'
import pizza_display from './pizza-cartoon-icon.png'
import fries_display from './fries-cartoon-icon.png'
import chicken_display from './chicken-cartoon-icon.png'
import noodle_display from './noodle-cartoon-icon.png'
import coffee_display from './coffee-cartoon-icon.png'
import sandwich_display from './sandwich-cartoon-icon.png'
import pasta_display from './pasta-cartoon-icon.png'
import biryani_display from './biryani-cartoon-icon.png'
import ice_cream_display from './ice-cream-cartoon-icon.png'

import pizza1_orders from './cheeses_pizza.avif'
import pizza2_orders from './pizza.avif'
import pizza3_orders from './Italian_pizza_food.jpeg'
import pizza4_orders from './veg-pizza.avif'
import chicken1_orders from './chicken_fry.avif'
import chicken2_orders from './chicken_leg.avif'
import chicken3_orders from './crispy_fried.avif'
import chicken4_orders from './chicken-skewers.avif'
import chicken5_orders from './chicken_drum.avif'
import chicken6_orders from './curry-with-chicken.avif'
import burger1_orders from './chicken-burger.avif'
import burger2_orders from './grilled-cheeseburger.avif'
import burger3_orders from './veggie-burger.avif'
import burger4_orders from './bbq-burgeravif.avif'
import pasta1_orders from './vegetarian-pasta.avif'
import pasta2_orders from './red_pasta.avif'
import pasta3_orders from './cheese-macaroni.jpg'
import pasta4_orders from './masala-macaroni.jpg'
import noodles_orders from './noodles.avif'
import noodles1_orders from './haka-noodle.jpg'
import noodles2_orders from './chille-garlic-noodle.avif'
import noodles3_orders from './white-pasta.jpg'
import biryani1_orders from './veg_biryani.avif'
import biryani2_orders from './mutton-biryani.avif'
import biryani3_orders from './chicken_buryani.avif'
import biryani4_orders from './egg-biryani.avif'
import sandwich_orders from './sandwich.avif'
import sandwich1_orders from './egg-sandwich.jpg'
import sandwich2_orders from './grill-sandwich.jpg'
import sandwich3_orders from './cheeses-sandwich.jpg'
import fries1_orders from './french-fries.avif'
import fries2_orders from './salted_french_fries.avif'
import fries3_orders from './peri-fries.avif'
import fries4_orders from './Cheese-french-fries.jpg'
import ice_cream1_orders from './chocolate_ice-cream.avif'
import ice_cream2_orders from './stawbary_ice-cream.avif'
import ice_cream3_orders from './oreo_ice-cream.avif'
import coffee1_orders from './ice-coffee.avif'
import coffee2_orders from './latte-coffee.avif'
import coffee3_orders from './cold-coffee.jpg'


export const assets = {
    search,
    cart,
    home_image,
    icon,
    rating,
    split_burger,
    resto_img,
    resto1_img,
    resto2_img,
    resto3_img,
    resto4_img,
    left_arrow,
    right_arrow,
    pattern,
    user,
    logout,
    parcel,
    plus_solid,
    minus_solid,
    cross_icon,
    email_icon,
    lock_icon,
    user_icon,
    twitter,
    facebook,
    linkedin,
    twitter_color,
    google,
    facebook_color,
    app_store,
    play_store,
    home_icon,
    message,
    call,
    chicken_menu,
    fries_menu,
    burger_menu,
    pizza_menu
}

export const order_display = [
    {
        order_name: "Burger",
        order_image: burger_display
    },
    {
        order_name: "Pizza",
        order_image: pizza_display
    },
    {
        order_name: "Fries",
        order_image: fries_display
    },
    {
        order_name: "Chicken",
        order_image: chicken_display
    },
    {
        order_name: "Noodle",
        order_image: noodle_display
    },
    {
        order_name: "Sandwich",
        order_image: sandwich_display
    },
    {
        order_name: "Pasta",
        order_image: pasta_display
    },
    {
        order_name: "Biryani",
        order_image: biryani_display
    },
    {
        order_name: "Coffee",
        order_image: coffee_display
    },
    {
        order_name: "IceCream",
        order_image: ice_cream_display
    }
]


export const food_list = [
    {
        _id: 1,
        name:"Chilli Pasta",
        image: pasta2_orders,
        price: 120,
        description: "Incredibly creamy and well-presented  velvety texture that’s very inviting.",
        category: "Pasta"
    },
    {
        _id: 2,
        name: "French Fries",
        image: fries1_orders,
        price: 100,
        description: " Hot, crunchy, and full of flavor—it's a go-to favorite for any time of day.",
        category: "Fries"
    },
    {
        _id: 3,
        name: "Sandwich",
        image: sandwich_orders,
        price: 80,
        description: "So fresh and tasty, I could eat this every day.",
        category: "Sandwich"
    },
    {
        _id: 4,
        name: "White Pasta",
        image: pasta1_orders,
        price: 150,
        description: "Creamy, dreamy, and packed with earthy mushroom white sauce pasta is comfort in a bow.",
        category: "Pasta"
    },
    {
        _id: 5,
        name: "Chicken Biryani",
        image: biryani3_orders,
        price: 250,
        description: "Soft, rich, and perfectly spiced rice with chicken and spices.",
        category: "Biryani"
    },
    {
        _id: 6,
        name:"Mushroom Pizza",
        image: pizza2_orders,
        price: 150,
        description: "Freshly baked with mushroom and  cheese, and your choice of tasty toppings.",
        category: "Pizza"
    },
    {
        _id: 7,
        name: "Chicken skewers",
        image: chicken4_orders,
        price: 150,
        description: "Warm, comforting, and packed with taste—it's a satisfying meal for any occasion.",
        category: "Chicken"
    },
    {
        _id: 8,
        name:" Peri-Peri Fries",
        image: fries3_orders,
        price: 120,
        description: "Hot, crunchy, and full of flavor—it's a go-to favorite for any time of day.",
        category: "Fries"
    },
    {
        _id: 9,
        name: "Grilled Burger",
        image: burger2_orders,
        price: 200,
        description: "Perfectly grilled  that burger is a total showstopper! Juicy, smoky, and irresistible",
        category: "Burger"
    },
    {
        _id: 10,
        name: "Chicken Fry",
        image: chicken1_orders,
        price: 220,
        description: "Incredibly creamy and well-presented  velvety texture that’s very inviting.",
        category: "Chicken"
    },
    {
        _id: 11,
        name: "Mutton Biryani",
        image: biryani2_orders,
        price: 260,
        description: "Soft, rich, and perfectly spiced rice with mutton and spices",
        category: "Biryani"
    },
    {
        _id: 12,
        name: "Oreo Ice-Cream",
        image: ice_cream3_orders,
        price: 100,
        description: "Creamy, delicious with oreo taste that make your mood happy.",
        category: "IceCream"
    },
    {
        _id: 13,
        name: "Italian Pizza",
        image: pizza3_orders,
        price: 280,
        description: "Freshly baked dish with a melted mozzarella cheese, and your choice of tasty toppings.",
        category: "Pizza"
    },
    {
        _id: 14,
        name: "Chicken Drum",
        image: chicken5_orders,
        price: 200,
        description: "It's a flavorful and satisfying snack or meal, loved for its juicy and savory taste.",
        category: "Chicken"
    },
    {
        _id: 15,
        name: "Veg Biryani",
        image: biryani1_orders,
        price: 180,
        description: "Full of veggies, Soft, rich, and perfectly spiced rice with chicken and spices.",
        category: "Biryani"
    },
    {
        _id: 16,
        name: "Chicken Fried",
        image: chicken3_orders,
        price: 200,
        description: "Incredibly creamy and well-presented  velvety texture that’s very inviting.",
        category: "Chicken"

    },
    {
        _id: 17,
        name: "Chicken Burger",
        image: burger1_orders,
        price: 260,
        description: "Warm, comforting, and packed with taste it's a satisfying meal for any occasion.",
        category: "Burger"
    },
    {
        _id: 18,
        name: "Coffee",
        image: coffee2_orders,
        price: 80,
        description: " Rich, creamy , delicious, bold, and full of comfort in every sip.",
        category: "Coffee"
    },
    {
        _id: 19,
        name: "Chicken Curry",
        image: chicken6_orders,
        price: 260,
        description: "It's a flavorful and satisfying snack or meal, loved for its juicy and savory taste.",
        category: "Chicken"
    },
    {
        _id: 20,
        name: "Chicken Leg",
        image: chicken2_orders,
        price: 160,
        description: "It's a flavorful and satisfying snack or meal, loved for its juicy and savory taste.",
        category: "Chicken"

    },
    {
        _id: 21,
        name: "Mozzarella Pizza",
        image: pizza1_orders,
        price: 150,
        description: "Freshly baked dish with a melted mozzarella cheese, and your choice of tasty toppings.",
        category: "Pizza"
    },
    {
        _id: 22,
        name: "Veg Noodle",
        image: noodles_orders,
        price: 150,
        description: "It's a flavorful and satisfying snack or meal, loved for its juicy and savory taste.",
        category: "Noodle"
    },
    {
        _id: 23,
        name: "Grill Sandwich",
        image: sandwich2_orders,
        price: 100,
        description: "Crunchy full of veggies , savory taste and healthy to maintain your diet.",
        category: "Sandwich"
    },
    {
        _id: 24,
        name: "Veg Pizza",
        image: pizza4_orders,
        price: 180,
        description: "Freshly baked with veggies and cheese, and your choice of tasty toppings.",
        category: "Pizza"
    },
    {
        _id: 25,
        name: "Cheese Fries",
        image: fries4_orders,
        price: 160,
        description: "Dip in Cheese,delicious potato fries with mayo and souses.",
        category: "Fries"
    },
    {
        _id: 26,
        name: "Veggie Burger",
        image: burger3_orders,
        price: 230,
        description: "It's a flavorful and satisfying meal with Veg patties, its juicy and savory taste.",
        category: "Burger"
    },
    {
        _id: 27,
        name: "Haka Noodles",
        image: noodles1_orders,
        price: 180,
        description: "Vegetable haka noodles or chow mein ,well cooked spicy delicious chines food.",
        category: "Noodle"
    },
    {
        _id: 28,
        name: "BBQ Burger",
        image: burger4_orders,
        price: 280,
        description: "It's a flavorful and satisfying snack or meal, loved for its juicy and savory taste.",
        category: "Burger"

    },
    {
        _id: 29,
        name: "Creamy Noodle",
        image: noodles3_orders,
        price: 150,
        description: "Cheese with mushroom and creamy texture white mushroom noodle",
        category: "Noodle"
    },
    {
        _id: 30,
        name: "Egg Sandwich",
        image: sandwich1_orders,
        price: 50,
        description: "It's a flavorful and satisfying snack or meal, loved for its juicy and savory taste.",
        category: "Sandwich"
    },
    {
        _id: 31,
        name: "Cheese Macaroni",
        image: pasta3_orders,
        price: 150,
        description: "Cheese with creamy macaroni creamy ,delicious taste.",
        category: "Pasta"
    },
    {
        _id: 33,
        name: "Cheese Sandwich",
        image: sandwich3_orders,
        price: 160,
        description: "Bread with top layer of melted cheese and and flavour taste.",
        category: "Sandwich"

    },
    {
        _id: 34,
        name: "Masala Macaroni",
        image: pasta4_orders,
        price: 150,
        description: "It's a flavorful and satisfying meal , its juicy and savory taste.",
        category: "Pasta"
    },
    {
        _id: 35,
        name: "Ice Coffee",
        image: coffee1_orders,
        price: 100,
        description: "Cold, creamy, and delicious, its cold coffee perfection.",
        category: "Coffee"
    },
    {
        _id: 36,
        name: "Chilli Noodle",
        image: noodles2_orders,
        price: 200,
        description: "Spicy chilli garlic noodles  ,well cooked spicy delicious chines food.",
        category: "Noodle"
    },
    {
        _id: 37,
        name: "Salted Fries",
        image: fries2_orders,
        price: 120,
        description: "Salty ,delicious potato fries with mayo and souses.",
        category: "Fries"
    },
    {
        _id: 38,
        name: "Egg Biryani",
        image: biryani4_orders,
        price: 200,
        description: "Soft, rich, and perfectly spiced rice with egg and spices.",
        category: "Biryani"
    },
    {
        _id: 39,
        name: "Chocolate Ice Cream",
        image: ice_cream1_orders,
        price: 100,
        description: "A delicious desert with full of chocolate that's sure to make you feel full.",
        category: "IceCream"
    },
    {
        _id: 40,
        name: "Strawberry Ice-Cream",
        image: ice_cream2_orders,
        price: 120,
        description: "Creamy, delicious with strawberry taste that make your mood happy.",
        category: "IceCream"
    },

    {
        _id: 41,
        name: "Cold Creamy Coffee",
        image: coffee3_orders,
        price: 80,
        description: "Cold, creamy, and calling my name — cold coffee perfection.",
        category: "Coffee"
    }

]

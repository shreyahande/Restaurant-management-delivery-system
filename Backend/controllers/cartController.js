import userModel from "../models/userModel.js";


const addToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const itemId = req.body.itemId;

        let userData = await userModel.findById(userId);
        let cartData = userData.cartData;

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};


const removeFromCart = async (req,res) => {
    try {
        const userId = req.user.id;
        const itemId = req.body.itemId;

        let userData = await userModel.findById(userId);
        let cartData = userData.cartData;

        if (cartData[itemId] > 0) {
            cartData[itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, cartData });
    } catch (error) {
        console.error("Remove from cart error:", error.message);
        res.json({ success: false, message: "Internal Server Error" });
    }
}

const getCart = async (req,res) => {
    try{
        const userId = req.user.id;
        let userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        res.json({success: true, data: cartData});
    }catch (err) {
        console.log(err);
        res.json({success: false, message: 'Error'});
    }
}

export {addToCart, getCart,removeFromCart}
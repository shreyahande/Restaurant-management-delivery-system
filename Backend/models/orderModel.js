import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    quantity: {type: Number, required: true}
}, { _id: false });

const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:[itemSchema],required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String, default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean, default:false}
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;
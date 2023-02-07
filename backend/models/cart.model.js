const mongoose = require("mongoose");


const cartSchema =  new mongoose.Schema({
    productname:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    strike_price:{type:Number},
    quantity : {type : Number , default : 1 , min : 1 , required : true},
    category:{type:String,required:true},
    delivery_time:{type:String,required:true},
    multi_image:{type:Array},
    userId:{type:String,required:true}

})

const Carts = mongoose.models("carts" , cartSchema)



module.exports = {
    Carts
}
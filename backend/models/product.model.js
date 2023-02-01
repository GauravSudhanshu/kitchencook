const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image:{type:String,required:true},
    productname:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    strike_price:{type:Number},
    category:{type:String,required:true},
    delivery_time:{type:String,required:true},
    multi_image:{type:Array},

})

const Products = mongoose.model("product",productSchema)

module.exports ={
    Products
}
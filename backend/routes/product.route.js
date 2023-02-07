const express = require("express")
const router = express.Router();
const app =  express();
app.use(express.json())
const Products = require("../models/product.model")
const authenticator = require("../middlewares/authenticator")

// All Products
app.get("/",async (req,res)=>{
    const query = req.query
    const{limit=12,page=1} = query
    console.log(limit,page)
try{
    const allProducts = await Products.find(query)
res.send(allProducts)
}
catch(e){
res.send(e.message)
}
})

//Single Product

app.get("/id", authenticator ,async(req,res)=>{
    let id = req.params.id
    try{
let product = await Products.findById(id)
res.send(product)

    }
    catch(e){
        res.send(e.message)
    }
})


module.exports= app
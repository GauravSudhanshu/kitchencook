const express = require("express")
const router = express.Router();
const app =  express();
app.use(express.json())
const Products = require("../models/product.model")

app.get("/",async (req,res)=>{
    const query = req.query

try{
    const allProducts = await Products.find(query)
res.send(allProducts)
}
catch(e){
res.send(e.message)
}
})


module.exports= app
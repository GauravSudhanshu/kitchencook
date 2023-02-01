require("dotenv").config()

const express = require("express")
const cors = require("cors");
const connect  = require("./config/db");
const app = express();
// const port = process.env.port



app.use(express.json())
app.use(cors())


app.listen(3030,async() =>{
    try{
        
        console.log(`Running At https://localhost:3030`)
    }
    catch(e){
console.log(e.message)
    }
    
})
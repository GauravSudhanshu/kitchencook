require("dotenv").config()

const express = require("express")
const cors = require("cors");
const connect  = require("./config/db");
const app = express();
const port = process.env.PORT



// app.use(express.json())
// app.use(cors())

app.get("/",()=>{
res.status("200").json({
    message:"Hello"
})

})
app.listen(port,() =>{
    
        
        console.log(`Running At https://localhost:${port}`)

    
})
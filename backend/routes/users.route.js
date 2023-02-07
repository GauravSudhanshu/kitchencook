const express = require("express")
const bcrypt = require('bcrypt');
const Users = require("../models/user.model")
const app = express();
app.use(express.json())
const key = process.env.key

app.post("/signup",async(req,res)=>{
const{name,email,password} = req.body

    try{
        let existinguser = await User.findOne({email})
        console.log(existinguser)
        if(existinguser){
            res.send("User Already Exist")
        }else{
            bcrypt.hash(password,6,async(err,sec_pass)=>{
                if(err){
                    res.send(err)
                }else{
                    let createUser = new Users({name:name,email:email,password:password,role:"User"})
                    await createUser.save()
                    res.send("Signup Successfully")
                }
            })
        }
       
    }catch(e){
        res.send(e.message)
        console.log(e.message)
    }
    
})
app.post("/login",async(req,res)=>{
    const{email,pass}=req.body
    try{
        const user = await Users.findOne({email})
        
        console.log(user)
        if(user){
            bcrypt.compare
        }
        res.send("Login Succesfull")
    }
    catch(err){
    console.log("Cannot Connect")
    console.log(err)
}
})


module.exports = app
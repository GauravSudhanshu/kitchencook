const express = require("express")
const jwt = require("jsonwebtoken")
const key = process.env.key
const authenticate=(req,res,next)=>{
    res.send("Hii..")
    let token = req.headers.authorization
    console.log({token})
if(token){
    res.send("Token is Missing , Login First")
}else{
    try{
        let verification = jwt.verify(token,key)
        if(verification){
            res.body.userID = verification.id
            next()
        }else{
            res.send("Please Login First")
        }
        req.body.userID = verification.id
    }
    catch(e){
        res.send(e.message)
    }
}
    
}

module.exports = {
    authenticate
}

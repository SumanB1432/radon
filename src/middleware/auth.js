const jwt = require("jsonwebtoken")
const {ObjectId} = require('mongodb');
const userModel =require("../models/userModel")
const userController= require("../controllers/userController")
const authenticate = async function(req, res, next) {
    // console.log(req.headers["x-auth-token"])
     let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
   
    if(!token){
        res.send({status:false,msg:"importent header is missing"})
    }
   next()
}


const authorise = async function(req, res, next) {
    let token = req.headers["x-auth-token"];
   
    

    let logInuserId =  req.params.userId
    

    
    let user = await userModel.findById(logInuserId)
    
    
   
    
    let decodedToken = jwt.verify(token,"functionup-radium")
    
    let decodedUserId = decodedToken.userId
    
    if(!user){
        res.send({status:false,msg:"no such user found"})
    }
    else{
    if(decodedUserId!=user._id){

        res.send({status:false,msg:"User logged is not allowed to modify the requested users data"})
    }
    else{
       next()
    }
    
    
    
}
}
module.exports.authenticate= authenticate
module.exports.authorise=authorise
const jwt = require("jsonwebtoken")
const {ObjectId} = require('mongodb');
const userModel =require("../models/userModel")
const userController= require("../controllers/userController")
const authenticate = async function(req, res, next) {
    // console.log(req.headers["x-auth-token"])
    try{
     let token = req.headers["x-auth-token"];
    
   
    if(!token){
        res.status(400).send({status:false,msg:"importent header is missing"})
    }
    let decodedToken = jwt.verify(token,"functionup-radium",function(err,data){
        if (err){
            return res.status(400).send({status:false,msg:"Inavlid Token"});
        }
   else{
    next()
    
   }     
    
        
})
   
}
catch(err)
{
    res.status(500).send({msg:"Server is Not respond"})
}

}


const authorise = async function(req, res, next) {
    try{
    let token = req.headers["x-auth-token"];
   let logInuserId =  req.params.userId
   let user = await userModel.findById(logInuserId)
   let decodedToken = jwt.verify(token,"functionup-radium")
   let decodedUserId = decodedToken.userId
    
    if(!user){
        res.status(400).send({status:false,msg:"no such user found"})
    }
    else{
    if(decodedUserId!=user._id){

        res.status(400).send({status:false,msg:"User logged is not allowed to modify the requested users data"})
    }
    else{
        
       next()
    }
}
    
    
    
}
catch(err){
    res.ststus(500).send({msg:"Server Is Not Respond"})
}
}
module.exports.authenticate= authenticate
module.exports.authorise=authorise
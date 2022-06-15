const jwt = require("jsonwebtoken")
const userModel =require("../models/userModel")
const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers
    if(!token){
        res.sen({status:false,msg:"importent header is missing"})
    }
   next()
}


const authorise = async function(req, res, next) {
    let logInuserId = req.params.UserId
    let user = await userModel.findById(logInuserId)
    let decodedToken = jwt.verify(token,"functionup-radium")
    let decodedUserId = decodedToken.UserId
    if(!user){
        res.send({status:false,msg:"no such user found"})
    }
    else{
    if(decodedUserId!==user._id){
        res.send({status:false,msg:"User logged is not allowed to modify the requested users data"})
    }
    
    next()
}
}
module.exports.authenticate= authenticate
module.exports.authorise=authorise
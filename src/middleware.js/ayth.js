const jsonwebtoken=require("jsonwebtoken")
const validToken= async function(req,res){
    let token = req.headers["x-auth-token"]
    if(!token){
        res.send({status:false, msg: "headers is missing" })
    }
    console.log(token)

    let decodedToken = jsonwebtoken.verify(token,"functionup-radium")
    if(!decodedToken){
        res.send("invalid token")
    }
    next()
} 
module.exports .validToken=validToken
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  if(Object.keys(data).length!=0){
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({msg:savedData})
  }

  
  else{
    res.status(400).send({msg:"Bad Request"})
  }
  }
  catch(err){
           res.status(500).send("Server Not Respond")
  }
 };


const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
  

     if(userName && password){
      let user = await userModel.findOne({ emailId: userName, password: password });
      let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
   "functionup-radium"
  );
   res.setHeader("x-auth-token", token);
   res.status(201).send({ status: true, data: token })
    
    }
  
  else{
       
  res.status(400).send({msg:"Bad Request"});
  }
}

  
  catch(err){
    res.status(500).send({msg:"Server Not Response"})
  }
};

const getUserData = async function (req, res) {
 
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
     res.status(400).send({ status: false, msg: "No such user exists" });
  }
 else{
  res.status(201).send({ status: true, data: userDetails });
 }
}
catch(err){
  res.status(500).send("Server Not Response")
}
 };


const updateUser = async function (req, res) {
  try{
    let userData = req.body;
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user || userData) {
    return res.status(400).send("Bad Request");
  }
  else{
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });
  }
 }
 catch(err){
  res.status(500).send({msg:"Server Not Respond"})
 }
};
const deleteUser = async function(req,res){
  try{
  let header= req.headers["x-auth-token"]
  if(header){
    let userId = req.params.userId;
    let user = await  userModel.findById(userId)
    
      if(!user){
        res.status(400).send("No such user exists")
      }
      else{
          let deletedUser= await userModel.findOneAndUpdate({_id:userId},{ $set:{isDeleted:true}},{new:true})
          res.status(201).send({status:deletedUser,data:deletedUser})
      }
  }

}
catch(err){
  res.status(500).send({msg:"Server Not Response"})
}
}
const postMessage = async function (req, res) {
    try{
    let userId= req.params.userId
    let user = await userModel.findById(userId)
    let updatedPosts = user.posts

    let message = req.body.message
    if(message){
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
    return res.status(201).send({status: true, data: updatedUser})
    }
    else{
      res.status(400).send({msg:"Bad Request"})
    }
    }
    catch(err){
      res.status(500).send("Server Not Response ")
    }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
module.exports.postMessage = postMessage

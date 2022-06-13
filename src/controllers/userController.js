
const userModel = require("../models/userModel")



const createUser= async function (req, res) {
    let user = req.body
    let createUser = await userModel.create(user)
    res.send({data:createUser})
}
    

const getUsersData= async function (req, res) {
    let getUsersData= await userModel.find()
    res.send({data:getUsersData})
}
   

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData


const orderModel = require("../models/orderModel")



const createOrder= async function (req, res) {
    let order=req.body
    let createOrder = await orderModel.create(order)
    res.send({data:createOrder})
}
    

const getOrdersData= async function (req, res) {
    let getOrdersData= await orderModel.find()
    res.send({data:getOrdersData})
}
   

module.exports.createOrder= createOrder
module.exports.getOrdersData= getOrdersData

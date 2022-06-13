
const productModel = require("../models/productModel")



const createProduct= async function (req, res) {
    let product=req.body
    let createProduct = await productModel.create(product)
    res.send({data:createProduct})
}
    

const getProductsData= async function (req, res) {
    let getProductsData= await productModel.find()
    res.send({data:getProductsData})
}
   

module.exports.createProduct= createProduct
module.exports.getProductsData= getProductsData

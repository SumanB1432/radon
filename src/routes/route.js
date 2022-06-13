const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController");
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const orderModel = require('../models/orderModel');
const { db } = require('../models/userModel');


 router.post("/createUser",userController.createUser)
 router.get("/getUsers",userController.getUsersData)
 router.post("/createOrder",orderController.createOrder)
 router.get("/getOrders",orderController.getOrdersData)
 router.post("/createProduct",productController.createProduct)
 router.get("/getProducts",productController.getProductsData)


 router.post("/headerSearch", async function(req,res){
    let data =req.headers
    let user=req.body
     if("isfreeappuser" in data){
     let newData=await userModel.create(user)
     res.send({data:newData})


     }
     else{
        res.send("the request is missing a mandatory header")
     }
    })




     router.post("/orderSearch", async function(req,res){
        let data = req.headers
        let order= req.body
        let user =await userModel.find()
    
        let product=await productModel.find()
        let validUser=false
        let validProduct=false
        if("isfreeappuser" in data){
               user.map(item=>{
                
                if (order.userId==item._id ) validUser=true
              
              })
              
              product.map(item => {
                if (order.productId == item._id)
                
                    validProduct = true;
            //  console.log(validProduct)
            })
              if(validUser && validProduct){
                // console.log(data.isfreeappuser)
                if (data.isfreeappuser=="true")
                {
                    let newOrder = order
                    newOrder.amount=0
                     orderModel.create(newOrder)
                     res.send("order successful for free user")
                }
                else if(data.isfreeappuser=="false"){
                    user.map(item=>{
                        if(order.userId==item._id){
                            if(order.amount<=item.balance){
                                let newUser=user
                                newUser.balance=item.balance-order.amount
                                
                                
                               
                                // db.user1.replaceOne({_id:item._id},{newUser})
                               
                             

                               
                                
                                
                                 orderModel.create(order)
                                 res.send("Order successful ")
                            }
                            else{
                                res.send("Insufficient balance")
                            }
                        }
                    })
                }

              }
              else{
                res.send("Order is not valid")
              }

            
        }
        else {
            res.send(" the request is missing a mandatory header")
        }

     })
 







module.exports = router;
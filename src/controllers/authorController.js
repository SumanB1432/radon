const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
 

const createAuthor = async function (req, res) {
    var data=req.body
    let saveAuthor =await authorModel.create(data)
    res.send({msg:saveAuthor})
}
const getAuthorsData= async function (req, res) {


    let allAuthors = await authorModel.find()
    res.send({msg: allAuthors})
}

const authorid = async function(req,res){
    let a= await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let b=await bookModel.find({author_id:a[0].author_id})
    res.send({msg:b})
}
let authorOfBook= async function(req, res){

    let data=await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}}, {new: true}) 
    let authorData=await authorModel.find({author_id:data.author_id}).select("author_name")
    
    let price=data.price
    
    res.send({msg:authorData, price})
}
let bookPrice =async function(req,res){
    let data = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
    let a = await authorModel.find()
    let authors=[];
    data.map(item=>{
        a.map(item1=>{
            if(item.author_id==item1.author_id){
                authors.push(item1.author_name);
            }
        })
    })

    
    res.send({msg:authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.authorid=authorid
module.exports.authorOfBook=authorOfBook
module.exports.bookPrice=bookPrice
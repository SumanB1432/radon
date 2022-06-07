const { count } = require("console")
const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    var data=req.body
    let saveData=await bookModel.create(data)
    res.send({msg:saveData})
}
const getBooksData= async function (req, res) {


    let allBooks = await bookModel.find()
    res.send({msg: allBooks})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

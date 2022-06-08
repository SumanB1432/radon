const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController=require("../controllers/authorController")
const BookModel=require("../models/bookModel")
const AuthorModel=require("../models/authorModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
router.post("/creatAuthorsData", AuthorController.createAuthor)
router.get("/getAuthorsData", AuthorController.getAuthorsData)
router.get("/authorId",AuthorController.authorid)
router.get("/authorOfBook",AuthorController.authorOfBook)
router.get("/bookPrice",AuthorController.bookPrice)

router.get("/bookByAuthor/:author_id",  async function(req,res)
{
    let data = req.params.author_id;
    let bookByAuthor = await BookModel.find({author_id:data}).select({name:1,_id:0})
    res.send({data:bookByAuthor})
})
router.get("/author",async function(req,res){
    let data1= await AuthorModel.find({age:{$gt:50}})
    // console.log(data1)
    
    let data2 = await BookModel.find()
    // console.log(data2)
    let author1=[]
    data1.map(item=>{
        let author=[];
        data2.map(item1=>{
            if((item.author_id==item1.author_id) && (item1.ratings>=4)){
            author.push(item.author_name);
            author.push(item.age);
            } 
            // console.log(author);
        })
        if(author.length>0) author1.push(author);

    })
    
    res.send({data:author1})
    
    
    
})






module.exports = router;
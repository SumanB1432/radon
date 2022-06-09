const express = require('express');
const { required } = require('nodemon/lib/config');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController");
const authorModel = require('../models/authorModel');
const publisherModel = require('../models/publisherModel');
const bookModel=require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)


router.post("/createBook", async function(req,res){
    const book=req.body
    let authorId=book.author_id
    let publisherId=book.publisher_id
    let authorsDetails=await authorModel.find()
    
    let publishersDetails=await publisherModel.find()
   
    let validAuthor=false
    let validPublisher=false
    if(authorId==null || publisherId==null){
        res.send("detail is required")
    }
    else{
        authorsDetails.map(item=>{
            if(item._id==authorId) validAuthor=true

        })
        publishersDetails.map(item=>{
           
            if(item._id==publisherId) validPublisher=true

        })
       
        if(validAuthor && validPublisher) {
            await bookModel.create(book)
            res.send("created successfull")
        }
        else{
            res.send("author id or publish id is not valid")
        }
    }

    

})
router.put("/hardCover",async function(req,res){
const data = await bookModel.updateMany({ratings:{$gt:3.5}},{$inc:{price:10}});
const publisher= await bookModel.find({$or:[{name:"Penguin"},{name:"HarperCollins"}]});
for (let i of publisher){
    const updateBookIsHardCover =  bookModel.updateMany({publisher_id:i._id},{isHardCover:true},{new:true})
}
res.send({msg:data})
})
// router.get()
router.post("/createPublisher",publisherController.createPublisher)
router.get("/getPublishers",publisherController.getPublishersData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.get("/getBooksWithpublisherDetails", bookController.getBooksWithPublisherDetails)

module.exports = router;
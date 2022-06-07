const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController=require("../controllers/authorController")

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



module.exports = router;
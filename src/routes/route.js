const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');

var router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api! ')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there! is')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
router.get('/GET/movies',function(req,res){
    let array=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log("Done")
    res.send(array)

})
router.get('/movies/:indexNumber', function(req,res){
    let array=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    if(req.params.indexNumber<array.length){

        res.send("Your request to see the movie name with indexNumber:"+array[req.params.indexNumber]);
    }else{
        res.send("please enter a valid index number.")
    }
})
router.get('/GET/films',function(req,res){
const array1=[ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
   res.send("This is the movies list:"+JSON.stringify(array1))
})

router.get('/GET/films/:filmId',function(req,res){
    const array=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       if(req.params.filmId<=array.length){

           res.send(JSON.stringify(array[req.params.filmId-1]))
       }
       else{
           res.send("No movie exists with this id")

           
       }
})
router.get("/sol1",function(req,res){
    let array=[1,2,3,5,6,7]
    let total=0;
    for(let i=0;i<array.length;i++){
    total=total+array[i];
    }
    let lastDigit=array.pop()
    let consecutiveSum=lastDigit*(lastDigit+1)/2
    let missingNumber=consecutiveSum-total
    console.log("Done")
    res.send({data:missingNumber});
})
router.get("/sol2",function(req,res){
let arr= [33, 34, 35, 37, 38]

let len= arr.length


let total = 0;

for (let i=0;i<len;i++) {

    total += arr[i];

}


let firstDigit= arr[0]

let lastDigit= arr.pop()

let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2

let missingNumber= consecutiveSum - total



res.send(  { data: missingNumber  }  );

})
router.post("/suman",function(req,res){
    res.send("Done")
    console.log(req.body)
})
router.post("/suman1",function(req,res){
    let array=[1,2,3,4,5,6]
    let a=req.body.number
    array.push(a)
    let array2=[array]
    console.log("new array"+array2)
    res.send("Done")
})

module.exports = router;
// adding this comment for no reason
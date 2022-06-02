const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
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
router.get('/GET/movies/:indexNumber',function(req,res){
let movies=[{indexNumber:1,movieName:'Rang de basanti' },{ indexNumber:2,movieName:'The shininh'},{indexNumber:3,movieName:'Lord of the rings'},{indexNumber:4,movieName:'Batman begins'}]
let a=underscore.findIndex(movies,'indexNumber')
res.send(a)
})
// router.get('/sol1',function(req,res){
//     let a=[1,2,3,5,6,7];
//     let size=a.length;
//     let n=a[size-1];
//     let sum=(n*(n+1))/2;
//     let sum2=0;
//     for(let i=0;i<size;i++){
//       sum2=sum2+a[i];
//     }
//     let missingNumber=sum-sum2
//     console.log("Missinf Number of the array is="+missingNumber)
//     res.sendStatus(missingNumber);
// })


module.exports = router;
// adding this comment for no reason
const express = require('express');
const {default:mongoose}=require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);
mongoose.connect("mongodb+srv://Suman-1432:Suman1432@cluster0.bkkfmpr.mongodb.net/sumanbera",{useNewUrlParser:true,useUnifiedTopology:true})
.then(( )=>console.log("MongoDB is connected"))
.catch((err) =>console.log(err));



app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

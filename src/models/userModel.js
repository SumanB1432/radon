const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name:{
        type:String
    },
	balance:{
        type:Number,
        default:100
    },
	address:String,
	age:Number,
 	gender:{
        type:String,
        enum:["female","male","LGBTQ"]
        
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }

    },

 { timestamps: true });

module.exports = mongoose.model('User1', userSchema) 




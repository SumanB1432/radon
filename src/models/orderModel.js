const moment = require('moment');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId: {
        type:ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref:"Product"
    },
	
	amount:{
        type:Number,

    },
	isFreeAppUser:Boolean, 
	date:{
        type:Date,
        default:Date.now
    }
    },

 { timestamps: true });

module.exports = mongoose.model('order', orderSchema) //orders
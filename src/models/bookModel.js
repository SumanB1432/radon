const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor",
        required:true
        
    },
    publisher_id:{
        type:ObjectId,
        ref:"NewPublisher",
        required:true
    },

    price: Number,
    ratings: Number,
    isHardCover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)

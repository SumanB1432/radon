const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
  bookName:{
      type:String,
      unique:true,
      required:true,
  },
  authorName:String,
  category:{
      type:String,
      enum :['horror','Drama','Advanture'],
  },
  year:{
      type:Number,
  },

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array
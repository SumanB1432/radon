const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
  bookName:{
      type:string,
      require:true,
  },
  authorName:string,
  category:{
      type:string,
      enum :['horror','Drama','Advanture']
  },
  year:{
      type:Number,
  },

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array
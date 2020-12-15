const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
  author_id: Schema.Types.ObjectId, // yazar id'si alacağız
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  score: Number,
  category: String,
  year: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  price: Number
});

module.exports = mongoose.model('book', BookSchema);
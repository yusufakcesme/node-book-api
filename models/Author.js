const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
  name: String,
  surname: String,
  bio: String,
  age: Number,
  bookCount: Number
});


module.exports = mongoose.model('author', AuthorSchema);
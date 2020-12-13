const mongoose = require('mongoose');

module.exports = () => {

  mongoose.connect('mongodb+srv://yusuf-akcesme:akcesme123@book-api.iekso.mongodb.net/book-api?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('open', () => {
    console.log('MongoDB Connected..');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection failed', err);
  });

  mongoose.Promise = global.Promise;

}
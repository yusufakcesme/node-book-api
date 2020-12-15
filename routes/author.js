const { Router } = require('express');
const express = require('express');
const { findByIdAndUpdate } = require('../models/Author');
const router = express.Router();

// Models
const Author = require('../models/Author');

// butun yazarları listele
router.get('/', (req, res) => {
  const promise = Author.find({});

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});



// yeni bir yazar kaydet
router.post('/', (req, res, next) => {
  const author = new Author(req.body);
  const promise = author.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

});

// id verilen yazarı getir
router.get('/:author_id', (req, res) => {
  const promise = Author.findById(req.params.author_id);

  promise.then((author) => {
    if (!author) {
      next({ message: 'The author was not found!' });
    }
    res.json(author);
  }).catch((err) => {
    res.json(err);
  });

});

// update author info
router.put('/:author_id', (req, res) => {
  const promise = Author.findByIdAndUpdate(req.params.author_id, req.body, { new: true });

  promise.then((author) => {
    if (!author) {
      next({ message: 'The author was not found!' });
    }
    res.json(author);
  }).catch((err) => {
    res.json(err);
  });
});


// delete author 
router.delete('/:author_id', (req, res) => {
  const promise = Author.findByIdAndRemove(req.params.author_id);
  promise.then((author) => {
    if (!author) {
      next({ message: 'The author was not found!' });
    }
    res.json({
      status: true,
      message: 'The author is removed'
    });
  }).catch((err) => {
    res.json(err);
  });
});




module.exports = router;
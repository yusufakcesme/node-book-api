const { Router } = require('express');
const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

// butun kitapları listele
router.get('/', (req, res, next) => {
  const promise = Book.find({});

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

});


// yeni kitap kaydet
router.post('/', (req, res, next) => {
  // posttan gelen veriler
  const { title, author, score, category, year, createdAt, price } = req.body;
  const book = new Book({
    title: title,
    author: author,
    score: score,
    category: category,
    year: year,
    createdAt: createdAt,
    price: price
  });

  const promise = book.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


// score puanına göre top10 kitapları listele
router.get('/top-10', (req, res) => {
  // -1 büyükten küçüğe, 1 küçükten büyüğe
  const promise = Book.find({}).limit(10).sort({ score: -1 });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// fiyata göre sıralama çoktan aza doğru
router.get('/price/desc', (req, res) => {
  const promise = Book.find({}).limit(10).sort({ price: -1 });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// fiyata göre sıralama azdan çoka doğru
router.get('/price/asc', (req, res) => {
  const promise = Book.find({}).limit(10).sort({ price: 1 });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


// bir kitabın detaylarını getir
router.get('/:book_id', (req, res) => {
  const promise = Book.findById(req.params.book_id);

  promise.then((data) => {
    if (!data) {
      next({ message: 'Kitap Bulunamadı!' });
    }
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

});

// kitap detay güncelleme
router.put('/:book_id', (req, res) => {
  // new: true ile güncellenen datayı geri döndürüyoruz
  const promise = Book.findByIdAndUpdate(req.params.book_id, req.body, { new: true });

  promise.then((data) => {
    if (!data) {
      next({ message: 'Kitap Güncellenemedi!' });
    }
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


// kitap silme
router.delete('/:book_id', (req, res) => {
  const promise = Book.findByIdAndRemove(req.params.book_id);

  promise.then((data) => {
    if (!data) {
      next({ message: 'Kitap Güncellenemedi!' });
    }
    res.json({
      status: 1,
      message: 'Kitap Silindi!'
    });
  }).catch((err) => {
    res.json(err);
  });
});

// iki yıl arasındaki kitapları listeleme
router.get('/between/:start_year/:end_year', (req, res) => {

  /*
  * $gte -> büyük veya eşit (>=)
  * $lte -> küçük veya eşit (<=)
  * $gt -> büyüktür (>)
  * $lt -> küçüktür (<)
  */

  const promise = Book.find({
    year: {
      "$gte": parseInt(req.params.start_year),
      "$lte": parseInt(req.params.end_year)
    }
  });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});





module.exports = router;

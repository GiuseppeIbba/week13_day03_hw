//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const express = require('express');
const filmRouter = new express.Router();



filmRouter.get('/:id', function(req, res){
  res.json({data:films[req.params.id]});
});


filmRouter.get('/', function (req, res){
  res.json({data:films});
});


filmRouter.put('/:id', function (req, res){
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films[req.params.id] = film;
  res.json({data: films});
});

filmRouter.post('/', function(req, res){
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films.push(film);
  res.json({data: films});
});

filmRouter.delete('/:id', function (req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

filmRouter.post('/id/reviews', function(req, res){
  const film = films[req.params.id];
  const review1 = new review({
    comment: req.body.comment,
    rating: req.body.comment,
    author: req.body.author
  });
  film.addReview(review1);
  res.json({data: films})
})

module.exports = filmRouter;

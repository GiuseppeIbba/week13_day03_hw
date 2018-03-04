const Film = require('../models/film');
const assert = require('assert');
const Review = require('../models/review')

describe('Film', function () {
  let film;
  let review;

  beforeEach(function () {
    review1 = new Review({
      comment: "Awesome, especially the scene when the robot chickens saved the giant popsicle",
      rating: 49,
      autor: "The Captain"
    })
    film = new Film({
      title: "Titanic",
      actors: ["Drama"],
      reviews: [review1]
    });
  });

  it('should have a title', function () {
    assert.equal(film.title, "Titanic");
  });

  it('should have a genre', function(){
    assert.deepStrictEqual(film.actors[0], "Drama")
  });

  it('should have a review', function(){
    assert.deepStrictEqual(film.reviews[0], review1)
  });

})

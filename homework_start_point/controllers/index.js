const express = require('express');
const router = new express.Router();

router.use('/api/films', require('./films_controller'));

router.get('/', function (res, req){
  res.sendFile(__dirname + '/../client/build/index.html');
});

router.get('/about', function(req, res){
  res.send("All about us!");
});

module.exports = router;

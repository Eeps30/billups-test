var express = require('express');
var rp = require('request-promise');
var router = express.Router();

router.get('/choice', (req, res, next) => {
  rp('http://codechallenge.boohma.com/choice')
    .then((response) => {
      res.send(response);
    })
});

router.post('/play', (req, res, next) => {
  const playerChoice = req.body.params.player
  console.log(playerChoice);
  const options = {
    method: 'POST',
    uri: 'https://codechallenge.boohma.com:443/play',
    body: {
      player: playerChoice
    },
    json: true
  };

  rp(options)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    })
});

module.exports = router;

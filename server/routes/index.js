var express = require('express');
var rp = require('request-promise');
var router = express.Router();

router.post('/play', (req, res, next) => {
  const playerChoice = req.body.params.player
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

router.get('/choice', (req, res, next) => {
  const options = {
    method: 'GET',
    uri: 'https://codechallenge.boohma.com/choice',
    json: true
  }

  rp(options)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      res.send(err)
    })
})

module.exports = router;

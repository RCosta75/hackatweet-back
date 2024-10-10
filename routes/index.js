var express = require('express');
var router = express.Router();

const Tweet = require('../models/tweet');

/* GET PAGE ACCUEIL */
router.get('/', (req, res) => {
  Tweet.find()
  .then(response => response.json())
  .then(data => {
    res.json({result: true, tweets: data})
})
});

module.exports = router;

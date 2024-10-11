var express = require('express');
var router = express.Router();

const Tweet = require('../models/tweet');

router.post('/post' , (req,res) => {
    const newTweet = new Tweet({
        message : req.body.message,
        firstName : req.body.firstName,
        username : req.body.username
    })
    newTweet.save().then(data => {
        res.json({result : true, message : data.message})
    })
})


router.get('/get' , (req,res) => {
    Tweet.find().then(data => {
        res.json({result: true, data})
    })
})

module.exports = router;


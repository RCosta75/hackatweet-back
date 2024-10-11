var express = require('express');
var router = express.Router();

const Hashtag = require('../models/hashtag');
const Tweet = require('../models/tweet');

Tweet.find(

    hashtag: {$regex: new RegExp(req.body.username,'i')}
var express = require('express');
var router = express.Router();


User.find(

    hashtag: {$regex: new RegExp(req.body.username,'i')}
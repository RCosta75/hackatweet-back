const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    message : String,
    firstName : String,
    username : String,
    date: Date
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;
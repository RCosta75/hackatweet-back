const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  hashtag: String,
  times
});

const Hashtag = mongoose.model('hashtags', hashtagSchema);

module.exports = Hashtag;
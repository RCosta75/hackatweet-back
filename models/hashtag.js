const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  
});

const Hashtag = mongoose.model('hashtags', hashtagSchema);

module.exports = Hashtag;
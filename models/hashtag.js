const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
  hashtag: String,
  NumTimesUsed: Number,
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
});

const Hashtag = mongoose.model('hashtags', hashtagSchema);

module.exports = Hashtag;
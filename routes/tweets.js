var express = require("express");
var router = express.Router();

const Tweet = require("../models/tweet");
const User = require("../models/users");

//Message posted
router.post("/post/:token", (req, res) => {
  if (!req.body.message) {
    return res.json({ result: false, error: "Missing fields" });
  }

  User.findOne({ token: req.params.token }).then((data) => {
    const newTweet = new Tweet({
      message: req.body.message,
      date: req.body.date,
      author: data,
    });
    newTweet.save().then((newDoc) => {
      res.json({ result: true, message: newDoc });
    });
  });
});

// Messages listing
router.get("/get", (req, res) => {
  Tweet.find()
    .populate("author")
    .sort({ date: -1 })
    .then((data) => {
      res.json({ result: true, data });
    });
});

// Delete message
router.delete("/delete" , (req, res) => {
  Tweet.findOne({ _id: req.body.id})
  .then((data) => {
    if(data){
      Tweet.deleteOne({_id: req.body.id})
      .then((data)=> {
        res.json({result : true, data: data})
      })
    }
  })
})

module.exports = router;

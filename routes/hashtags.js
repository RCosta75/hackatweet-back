


User.find(

    hashtag: {$regex: new RegExp(req.body.username,'i')}
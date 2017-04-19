const db = require('../models/article')
const user = require('../models/user')


let createArticle = function(req, res) {
  db.create({
    title     : req.body.title,
    content   : req.body.content,
    author    : req.body.author
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      user.findByIdAndUpdate(data.author,
        {$push: {"article" : data._id}},
        {safe: true, upsert: true, new: true},
          function(err, success) {
            console.log(success);
            if (err) {
              res.send(err)
            } else {
              res.send(success)
            }
          }
      )
    }
  })
}

let getAll = function(req, res) {
  db.find({})
      .populate({path: 'author', select: ['username', 'email']})
      .exec(function(err, data) {
        if (!err) {
          res.send(data)
        }
      })
}

let deleteArticle = function(req, res) {
  db.findByIdAndRemove(req.params.id,
    function(err, data) {
      if (err) {
        res.send(err.message)
      } else {
        res.send("Article success deleted !")
      }
    })
}

module.exports = {
  createArticle,
  getAll,
  deleteArticle
}

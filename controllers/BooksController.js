var Book = require('../models/Book');

module.exports = {

  create: function(req, res) {
    Book.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },
//deleted out .where('pages').gt(30).sort('title').select('pages title') after sort before exec
  read: function(req, res) {
    //.populate({path: 'author'})      .populate({path: 'author', select: '-_id -name -degree'})      yes space
    //  Book.find().sort('title').populate({path: 'author', select: ' name degree'})exec(function(err, result) {

    Book.find().sort('title').populate('author').exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  show: function(req, res) {
    Book.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
    Book.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

};

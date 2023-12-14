// Create web server

var express = require('express');
var router = express.Router();
var db = require('../models');
var Comment = db.Comment;

// GET /comments
router.get('/', function(req, res, next) {
  Comment.findAll({ order: 'id DESC' }).then(function(comments) {
    res.render('comments/index', { title: 'Comments', comments: comments });
  });
});

// GET /comments/new
router.get('/new', function(req, res, next) {
  res.render('comments/new', { title: 'New Comment' });
});

// POST /comments
router.post('/', function(req, res, next) {
  Comment.create(req.body).then(function(comment) {
    res.redirect('/comments');
  });
});

// GET /comments/1
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id).then(function(comment) {
    res.render('comments/show', { title: 'Comment', comment: comment });
  });
});

// GET /comments/1/edit
router.get('/:id/edit', function(req, res, next) {
  Comment.findById(req.params.id).then(function(comment) {
    res.render('comments/edit', { title: 'Edit Comment', comment: comment });
  });
});

// PUT /comments/1
router.put('/:id', function(req, res, next) {
  Comment.findById(req.params.id).then(function(comment) {
    comment.update(req.body).then(function() {
      res.redirect('/comments');
    });
  });
});

// DELETE /comments/1
router.delete('/:id', function(req, res, next) {
  Comment.findById(req.params.id).then(function(comment) {
    comment.destroy().then(function() {
      res.redirect('/comments');
    });
  });
});

module.exports = router;
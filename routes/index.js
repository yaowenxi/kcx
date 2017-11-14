var express = require('express');
var router = express.Router();

/* GET home page. */
var index=['/','/index','/index.html']
var about=['/about','/about.html']
var pro=['/pro','/pro.html']
var cases=['/case','/case.html']
var news=['/news','/news.html']
var contact=['/contact','/contact.html']

router.get(index, function(req, res, next) {
  res.render('index');
});

router.get(about, function(req, res, next) {
    res.render('about');
});

router.get(pro, function(req, res, next) {
    res.render('pro');
});

router.get(cases, function(req, res, next) {
    res.render('case');
});

router.get(contact, function(req, res, next) {
    res.render('contact');
});


module.exports = router;

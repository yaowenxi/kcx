var express = require('express');
var router = express.Router();

/* GET home page. */
var index=['/','/index','/index.html']
var about=['/about','/about.html']
var pro=['/pro','/pro.html']
var cases=['/case','/case.html']
var news=['/news','/news.html']
var download=['/download','/download.html']
var contact=['/contact','/contact.html']
var feedback=['/feedback','/feedback.html']
var case_show=['/case_show','/case_show.html']
var news_show=['/case_show','/news_show.html']
var map=['/map','/map.html']


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

router.get(news, function(req, res, next) {
    res.render('news');
});

router.get(download, function(req, res, next) {
    res.render('download');
});

router.get(contact, function(req, res, next) {
    res.render('contact');
});

router.get(feedback, function(req, res, next) {
    res.render('feedback');
});

router.get(case_show, function(req, res, next) {
    res.render('case_show');
});

router.get(news_show, function(req, res, next) {
    res.render('news_show');
});

router.get(map, function(req, res, next) {
    res.render('map');
});

module.exports = router;

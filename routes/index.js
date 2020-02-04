var express = require('express');
var router = express.Router();
var fileService = require('../services/file-service')
var { settings, writeSettings, getDefaultDir, isValidDir } = require('../services/settings-service.js');
const { check, validationResult } = require('express-validator');
const { body } = require('express-validator');

fileService.setcwd(getDefaultDir());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Log Dashboard' });
});

/* GET select file. */
router.get('/select-file', function(req, res, next) {
  res.render('select-file', { title: 'Select Log File' });
});

/* GET settings. */
router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Settings' });
});

/* GET files. */
router.get('/files', fileService.get)

module.exports = router;

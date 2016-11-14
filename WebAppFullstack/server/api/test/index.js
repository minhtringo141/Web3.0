'use strict';

var express = require('express');
var controller = require('./test.controller');

var router = express.Router();

router.get('/findAll', controller.findAll);
router.post('/add', controller.add);

module.exports = router;

'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.get('/all', controller.getAll);
router.post('/login', controller.login);

// homework
router.get('/list', controller.list);
router.post('/register', controller.register);
router.post('/del', controller.del);
router.put('/update', controller.update);
router.get('/find/:username', controller.find);
router.get('/findAge', controller.findAge);

module.exports = router;

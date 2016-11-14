'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

// homework
router.get('/list', controller.list);
router.post('/register', controller.register);
router.delete('/del/:username', controller.del);
router.put('/update', controller.update);
router.get('/find/:username', controller.find);
router.get('/findAge', controller.findAge);

module.exports = router;

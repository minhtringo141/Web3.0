'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name: String,
    age: Number,
    password: String
});

module.exports = mongoose.model('User', user);

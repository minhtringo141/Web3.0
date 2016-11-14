'use strict';

var User = require('./user.model');

module.exports = {
    list: function(req, res) {
        User.find().exec(function(err, data) {
            if (data) {
                res.json(data);
            } else {
                res.json({ message: 'There is no user in db !' });
            }
        })
    },

    register: function(req, res) {
        if (req.body) {
            User.find({ username: req.body.username }).exec(function(err, data) {
                if (data) {
                    res.json({ message: 'User already exists !' });
                } else {
                    var newUser = {
                        username: req.body.username;
                        password: req.body.password;
                        age: req.body.age;
                    };
                    User.create(newUser, function(err, data) {
                        res.json(message: 'Add user successfully');
                    });
                }
            });
        }
    },

    del: function(req, res) {
        User.find({ username: req.params.username }).exec(function(err, data) {
            if (data) {
                data.remove(function(err) {
                    if (err) {
                        res.json({ message: "Error when deleting" });
                    } else {
                        res.json({ message: "Delete ok" });
                    }
                });
            } else {
                res.json({ message: 'User not exists !' });
            }
        });
    },

    update: function(req, res) {
        if (req.body) {
            User.find({username: req.body.username}).exec(function(err, data) {
                if(data){
                    data.password = req.body.password;
                    data.age = req.body.age;
                    data.save(function(err, dt) {
                        if(err){
                            res.json({message: 'Error on saving'});
                        }else{
                            res.json({message: 'Update done'});
                        }
                    });
                }else{
                    res.json({message: 'User not exists'});
                }
            });
        }
    },

    find: function(req, res) {
        if (req.params) {
            User.find({username: req.params.username}).exec(function(err, data) {
                if(data){
                    res.json(data);
                }else{
                    res.json({message: 'User not exists'});
                }
            });
        }
    },

    findAge: function(req, res) {
        if (req.query) {
            User.find(
                {age: {$gte: req.query.x, $lte: req.query.y}}
            ).exec(function(err, data) {
                if(data){
                    res.json(data);
                }else{
                    res.json({message: 'User not found'});
                }
            });
        }
    }




}

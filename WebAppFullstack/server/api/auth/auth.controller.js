'use strict';

var users = [{
    username: 'admin',
    password: '123456',
    age: 20
}, {
    username: 'cuong',
    password: '123',
    age: 25
}, {
    username: 'duc',
    password: 'less',
    age: 27
}];

module.exports = {
    getAll: function(req, res) {
        res.json('Get Thing');
    },

    login: function(req, res) {
        if (req.body) {
            users.forEach(function(item) {
                if (item.username == req.body.username && item.password == req.body.password) {
                    res.json({ status: 'true', message: '' });
                } else {
                    res.json({ status: 'false', message: '' });
                }
            });
        }
    },

    list: function(req, res) {
        if (req.body) {
            res.json(users);
        }
    },

    register: function(req, res) {
        if (req.body) {
            var flag = false;
            users.forEach(function(item) {
                if (item.username == req.body.username) {
                    flag = true;
                    res.json({'message':'Username already exist !'});
                }
            });

            if(!flag){
                users.push(req.body);
                res.json({'message':'Register ok!'});
            }
        }
    },

    del : function(req, res) {
        if(req.body) {
            var flag = false;
            users.forEach(function(item){
                if(item.username == req.body.username) {
                    flag = true;
                    delete users.item;
                    res.json({'message':'Delete done !'});
                } 
            });

            if(!flag){
                res.send({'message':'User not found, can not delete !'});
            }

        }
    },

    update: function(req, res) {
        if(req.body) {
            var flag = false;
            users.forEach(function(item){
                if(item.username == req.body.username && item.password == req.body.password) {
                    flag = true;
                    item.username = req.body.new_username;
                    item.password = req.body.new_password;
                    res.json({'message':'Update done !'});
                } 
            });

            if(!flag){
                res.send({'message':'User not found, can not update !'});
            }
        }
    },

    find: function(req, res) {
        if(req.params){
            var flag = false;
            users.forEach(function(item){
                if(item.username == req.params.username) {
                    flag = true;
                    res.json(item);
                } 
            });

            if(!flag){
                res.send({'message':'User not found !'});
            }
        }
    },

    findAge: function(req, res){
        if(req.query) {
            var flag = false;
            var result = [];
            users.forEach(function(item){
                if(parseInt(item.age) >= parseInt(req.query.x) && parseInt(item.age) <= parseInt(req.query.y)) {
                    flag = true;
                    result.push(item);
                } 
            });

            if(flag){
                res.json(result);
            }

            if(!flag){
                res.send({'message':'User not found !'});
            }
        }
    }




}

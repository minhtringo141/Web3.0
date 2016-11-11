'use strict';

var users = [{
  username: 'admin',
  password: '123456'
}, {
  username: 'cuong',
  password: '123'
}];

module.exports = {
  login : function(req, res){
    if (req.body) {
      users.forEach(function(item){
        if (item.username === req.body.username) {
          if (item.password === req.body.password) {
            res.json({status: true, message: ''});
          } else {
            res.json({status: false, message: 'Wrong Password!'});
          }
        }
      });

      res.json({status: false, message: 'Username not exist!'});
    }
  }
}

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
// app.route('/user')
//     .get(function(req, res) {
//     	console.log('Get method !');
//     	res.send('Success');
//     })
//     .post(function(req, res) {
//     	res.send('Success');
//     })
//     .put(function(req, res) {

//     })
//     .delete(function(req, res) {

//     })

// config 
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var router = express.Router();

router.get('/thing/xxx', function(req, res) {
	console.log(req.query);
	res.send('ok'); 
});

router.get('/thing/:username', function(req, res) {
   	console.log(req.params);
   	res.send('ok'); 
});

router.post('/thing', function(req, res) {
   	console.log(req.body);
   	res.send('ok'); 
});



app.use('/api', router);






app.listen(3000, function() {
    console.log("Listening on port 3000!");
});

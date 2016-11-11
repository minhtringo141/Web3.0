var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/public'));

app.listen(7000, function(){
	console.log("Listening on port 7000");
});
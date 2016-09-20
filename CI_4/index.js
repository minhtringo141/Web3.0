var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var allTanks = {}


io.on('connection', function(socket){
  console.log('user connected');

  // correct Homework
  socket.on('newtankPosition', function(msg){
    msg.id = socket.id;

    socket.emit('listOtherTanks', allTanks);
    allTanks[socket.id] = msg;
    socket.broadcast.emit('newPlayerJoined', msg);
  });

  socket.on('tankMoved', function(msg){
    if(allTanks[socket.id]){
      msg.id = socket.id;
      allTanks[socket.id].x = msg.position.x;
      allTanks[socket.id].y = msg.position.y;
      socket.broadcast.emit('playerTankMoved', msg);
    }
  });


  socket.on('disconnect', function(){
    delete allTanks[socket.id];
    socket.broadcast.emit('playerDisconnect', socket.id);
    console.log('user disconnected: ' + socket.id);
  });
});

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
});

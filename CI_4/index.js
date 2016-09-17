var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('user connected');

  /*
   * TODO: For CI3 Homework
   */

  /*
   * socket là một cổng kết nối giữa server (file index.js)
   * và client (file Client.js chạy trên máy người dùng)
   *
   * socket.emit sẽ gửi 1 tin nhắn từ server đến client, gồm 2 phần:
   * - tên của tin nhắn (ở đây là 'connected')
   * - nội dung của tin nhắn (ở đây là 'Welcome to Tank Online' vân vân)
   */
  socket.emit('connected', 'Welcome to Tank Online, your id is: ' + socket.id);

  /*
   * socket.broadcast.emit có cấu trúc tin nhắn giống socket.emit,
   * nhưng nó không gửi tin nhắn đến máy của người chơi của socket đó
   * mà lại gửi tin nhắn này đến TẤT CẢ những người chơi khác
   */


  // homework
  socket.on('newtankPosition', function(msg){
    socket.broadcast.emit('newtank', msg);
  });



  socket.on('disconnect', function(){
    console.log('user disconnected: ' + socket.id);
  });
});

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
});

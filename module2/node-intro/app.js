var myChalk = require('chalk');
var myKirbyDance = require('kirby-dance');

// socketIO
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// kirby and chalk
for (var i = 0; i <= 5; i++) {
  var color = myChalk.blue.bgGreen("hello");
  console.log(color);
}

console.log(myChalk.red(myKirbyDance(100)));

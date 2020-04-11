// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http); 
 
app.use(express.static(__dirname + '/src/client/'));

io.on('connection', function (socket) {
    console.log(`${socket.id} has joined!`);
    socket.on('disconnect', function () {
        console.log(socket.id + 'has leaved!');
    });  
    
});
var port = process.env.PORT || 8080;
http.listen(port, function () {
    console.log('server on!');
    console.log('http://localhost:'+port);
}); 

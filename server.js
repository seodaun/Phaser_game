// server.js

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/src/client/'));

io.on('connection', function (socket) {
    console.log(`${socket.id} has joined!`);
    socket.on('disconnect', function () {
        console.log(socket.id + 'has leaved!');
    });

});
let port = process.env.PORT || 8080;
http.listen(port, function () {
    console.log('server on!');
    console.log('http://localhost:' + port);
}); 

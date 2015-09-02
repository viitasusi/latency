var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	/*Lähetetään selaimelle paluuviesti*/
	console.log("socket-viesti");	
	
	socket.on('receive', function(msg) {
		var message = JSON.stringify(msg);
		console.log("tuli viesti: " + message);
		socket.emit('message', "paluuviesti");
	});
});

http.listen(3000, function() {
	console.log("listening 127.0.0.1:3000")
});
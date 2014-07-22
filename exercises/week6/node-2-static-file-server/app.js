var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, data) {
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

var server = app.listen(5358, function() {
	console.log('Express server listening on port ' + server.address().port);
});

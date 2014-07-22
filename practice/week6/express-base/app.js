var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
	res.send(fs.readFileSync('html/index.html', 'utf-8'));
});

app.get('/about', function(req, res) {
	res.send('<h1>About Boulder</h1>');
});

var server = app.listen(3118, function() {
	console.log('Express server listening on port ' + server.address().port);
});

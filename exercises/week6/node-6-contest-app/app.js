var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controller/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexController.loadIndex);

app.get('/submit', indexController.submit);

app.post('/submit-video-form', indexController.submitVideoForm);

app.get('/vote', indexController.vote);

var server = app.listen(3501, function() {
	console.log('Express server listening on port ' + server.address().port);
});

var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/numbers');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.get('/numbers', indexController.numbers);
app.post('/addNumber', indexController.addNumber);

var server = app.listen(8931, function() {
	console.log('Express server listening on port ' + server.address().port);
});

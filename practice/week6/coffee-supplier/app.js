var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controllers/index-controller.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', controller.index);

var server = app.listen(5737, function() {
	console.log('Express server listening on port ' + server.address().port);
});

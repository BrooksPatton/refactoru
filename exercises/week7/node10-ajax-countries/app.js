var express = require('express');
var bodyParser = require('body-parser');
var countries = require('./models/countries.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/countries', function(req, res) {
	res.send(countries);
});

var server = app.listen(5038, function() {
	console.log('Express server listening on port ' + server.address().port);
});

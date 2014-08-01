var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var https = require('https');
var fs = require('fs');

var hskey = fs.readFileSync('hacksparrow-key.pem');
var hscert = fs.readFileSync('hacksparrow-cert.pem');

var options = {
	key: hskey,
	cert: hscert
};

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.get('/translate', indexController.translate);

var server = https.createServer(options, app).listen(3800, 'localhost');
console.log('Express server listening on port ' + 3800);

// var server = app.listen(3800, function() {
	// console.log('Express server listening on port ' + server.address().port);
// });

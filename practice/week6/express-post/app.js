var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var lastSubmission = {};

app.get('/', function(req, res) {
	res.render('index', {
		submissionData: lastSubmission
	});
});

app.post('/handleForm', function(req, res) {
	var postedData = req.body;
	lastSubmission = postedData;
	// res.send('Welcome ' + postedData.username);
	res.redirect('/');
});

var server = app.listen(6912, function() {
	console.log('Express server listening on port ' + server.address().port);
});

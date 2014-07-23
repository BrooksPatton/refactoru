var express = require('express');
var bodyParser = require('body-parser');
var VideoContest = require('./js/video-contest.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('submitVideo');
});

// Route to handle the video submission
app.post('/submitVideo', function(req, res) {
	VideoContest.data.push(req.body);
	res.redirect('/');
})

// Route to the current video submissions
app.get('/currentSubmissions', function(req, res) {
	res.render('currentSubmissions', VideoContest.data);
})

var server = app.listen(8503, function() {
	console.log('Express server listening on port ' + server.address().port);
});

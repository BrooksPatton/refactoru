var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user.js');

mongoose.connect('mongodb://localhost/wingzingly');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/signup', function(req, res) {
	var user = new User({
		email: req.body.email
	});
	user.save(function(){});
	res.send('You have signed up for Wingzingly!!!');
});

app.get('/viewUsers', function(req, res) {
	User.find({}, function(error, results) {
		if(error) {
			res.send('error accessing User collection');
		}
		else {
			res.render('users', {
				users: results
			});
		}
	});
});

var server = app.listen(8774, function() {
	console.log('Express server listening on port ' + server.address().port);
});

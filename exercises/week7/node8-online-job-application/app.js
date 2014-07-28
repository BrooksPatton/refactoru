var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/awesomeJS');

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants')
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	var userResponse = req.body;
	var Applicant = mongoose.model('Applicant', {
		'name': String,
		'bio': String,
		'skills': String,
		'years': Number,
		'why': String
	});
	var applicant = new Applicant({
		name: userResponse.name,
		bio: userResponse.bio,
		skills: userResponse.skills,
		years: userResponse.years,
		why: userResponse.why
	});
	applicant.save();
	console.log(req.body);
	res.redirect('/success');
});

app.get('/success', function(req, res) {
	res.render('success');
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});

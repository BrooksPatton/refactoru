var beglobal = require('./beglobal.js');

var Languages = {
	languages: [],
};

beglobal.languages.all(function(err, results) {
	if(err) {
		console.log('Error getting languages: ', err);
	}
	else {
		results.forEach( function(item) {
			Languages.languages.push(item);
		} );
	}
});

module.exports = Languages;
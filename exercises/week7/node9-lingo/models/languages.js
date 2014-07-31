var beglobal = require('./beglobal.js');

var Languages = {
	getLanguages: function(cb) {
		beglobal.languages.all(function(err, results) {
			if(err) {
				console.log('Error getting languages: ', err);
			}
			else {
				cb(results[0]);
			}
		});
	}
};

module.exports = Languages;
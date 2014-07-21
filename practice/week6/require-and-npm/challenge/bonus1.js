var glob = require('glob');

glob('*.js', function(er, files) {
	files.forEach(function(item) {
		console.log(item);
	});
});
var luminosity = require('./luminosity.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

if( luminosity(r, g, b) > 155 ) {
	return 'light';
}
else {
	return 'dark';
}
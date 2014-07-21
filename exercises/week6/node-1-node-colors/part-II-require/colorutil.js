var luminosity = function(r, g, b) {
	return 0.2126*r + 0.7152*g + 0.0722*b;
};

var darken = function(r, g, b) {
	var result = [r * 0.8, g * 0.8, b * 0.8];
	return result.join(' ');
};

module.exports = {
	luminosity: luminosity,
	darken: darken
};

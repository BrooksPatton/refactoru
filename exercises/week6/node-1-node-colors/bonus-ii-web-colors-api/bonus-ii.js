var request = require('request');

var userInput = process.argv[2].toLowerCase();

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body) {
	if(!error && response.statusCode === 200) {
		checkUserColor( JSON.parse(body) );
	}
});

var checkUserColor = function(colors) {
	for(var i = 0; i < colors.length; i++) {
		if(userInput === colors[i].name.toLowerCase()) {
			console.log(colors[i].rgb.r, colors[i].rgb.g, colors[i].rgb.b);
			return colors[i].rgb.r, colors[i].rgb.g, colors[i].rgb.b;
		}
	}
 };
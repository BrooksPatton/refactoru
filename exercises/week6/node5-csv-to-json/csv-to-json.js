// Requires
var fs = require('fs');

// Global Variables
var arguments = process.argv.splice(2);
var csvFile = fs.readFileSync(arguments[0], 'utf-8');

// Functions
var toJson = function(csvString) {
	var listByNewline = csvString.split('\n');
	var titles = listByNewline.shift().split(',')
	var json = [];
	while(listByNewline.length > 0) {
		var list = listByNewline.shift().split(',');
		var obj = {};
		for(var i = 0; i < list.length; i++) {
			obj[ titles[i] ] = list[i];
		}
		json.push( JSON.stringify(obj) );
	}
	return json;
};

// Main
fs.writeFileSync(arguments[1], toJson(csvFile));
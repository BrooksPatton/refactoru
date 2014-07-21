var fs = require('fs');

var filesToConcatenate = process.argv.splice(2);
var fileToWriteTo = filesToConcatenate.pop();
var fileData = [];

filesToConcatenate.forEach(function(fileLocation) {
	fileData.push(fs.readFileSync(fileLocation, 'utf-8'));
});

fs.writeFileSync(fileToWriteTo, fileData.join('\n\n'));
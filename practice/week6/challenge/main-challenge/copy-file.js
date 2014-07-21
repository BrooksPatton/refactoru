var fs = require('fs');

var pathOfFileToCopy = process.argv[2];
var pathToCopyFileTo = process.argv[3];

var file = fs.readFileSync(pathOfFileToCopy, 'utf-8');

fs.writeFileSync(pathToCopyFileTo, file);
var fs = require('fs');

var textContent = fs.readFileSync(process.argv[2], 'utf-8');

console.log(textContent);
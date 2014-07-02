var firstReverse = function firstReverse(str) {
	return str.split('').reverse().join('');
};

var swapCase = function swapCase(str) {
	var newString = '';
	for(var i = 0; i < str.length; i++) {
		(str[i] === str[i].toUpperCase())? newString += str[i].toLowerCase(): newString += str[i].toUpperCase();
	}
	return newString;
};

var letterCount = function letterCount(str) {
	return str.split(' ').sort(function(a, b) { return b.length - a.length})[0];
}

$(document).on('ready', function() {
  
});
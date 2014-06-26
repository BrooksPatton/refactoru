// Callback functions
var capitalizeFirstLetter = function(word) {
	var arr = word.split("");
	var firstLetter = arr.shift();
	arr.unshift(firstLetter.toUpperCase());
	return arr.join("");
};

// Functions
var letterCapitalize = function(str) {
	return str.split(' ').map(capitalizeFirstLetter).join(" ");
};

var wordCount = function(sentence) {
	return sentence.split(" ").length;
};


$(document).on('ready', function() {
  
});
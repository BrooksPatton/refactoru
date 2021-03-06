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

function primeTime(number) {
	if(number <= 1)
		return false;
	else if(number === 2)
		return true;
	else if(number === 4)
		return false;
	for(var i = 3; i < number; i++) 
		if(number % i === 0) {return false}
	return true;
}
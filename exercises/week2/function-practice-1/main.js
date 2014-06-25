// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive()
// Five!
// Five!
// Five!
var tripleFive = function() {
	for(var i = 0; i < 3; i++) {
		console.log("Five!");
	}
};

// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'
var lastLetter = function(str) {
	return str[ str.length - 1 ];
};

// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25
var square = function(x) {
	return x * x;
};

// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8
var negate = function(x) {
	return x * -1;
};

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]
var toArray = function(a, b, c) {
	return [a, b, c];
};

// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false
var starsWithA = function(str) {
	if(str[0].toLowerCase() === "a") {
		return true;
	}
	return false;
};


// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'
var excite = function(str) {
	return str + "!!!";
};


// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true
// sun('catapult') should return false
var sun = function(str) {
	if(str.indexOf("sun") !== -1) {
		return true;
	}
	return false;
};


// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false
var tiny = function(num) {
	if(num > 0 && num < 1) {
		return true;
	}
	return false;
};


// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625
var getSeconds = function(str) {
	var time = str.split(":");
	var seconds = 0;
	// Get the seconds
	seconds += Number(time.pop());

	// Get the minutes if there are any
	if(time.length > 0) {
		seconds += Number(time.pop()) * 60;
	}

	// Get the hours if there are any
	if(time.length > 0) {
		seconds += Number(time.pop()) * 120;
	}
	// Return the seconds
	return seconds;
}

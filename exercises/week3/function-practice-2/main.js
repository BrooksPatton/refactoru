var getName = function getName(obj) {
	return obj.name;
};

var totalLetters = function totalLetters(arr) {
	var count = 0;
	arr.forEach(function(word) {
		count += word.length;
	});
	return count;
};

var keyValue = function keyValue(arg1, arg2) {
	var newObject = {};
	newObject[arg1] = arg2;
	return newObject;
};

var negativeIndex = function negativeIndex(arr, negativeNumber) {
	return arr[negativeNumber + arr.length];
};

var removeM = function removeM(str) {
	var characters = str.split("");
	return characters.filter(function(index) {
		if(index.toLowerCase() !== 'm') {
			return index;
		}
	});
};

var printObject = function printObject(obj) {
	for(var i in obj) {
		console.log(i + ' is ' + obj[i]);
	}
};

var vowels = function vowels(str) {
	return str.split('').filter(function(letter) {
		var vowels = ['a', 'e', 'i', 'o', 'u'];
		if( vowels.indexOf(letter) >= 0 ) {
			return true;
		}
	});
};

$(document).on('ready', function() {
  
});
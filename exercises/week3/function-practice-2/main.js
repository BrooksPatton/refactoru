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

$(document).on('ready', function() {
  
});
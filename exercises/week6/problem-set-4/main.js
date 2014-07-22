// Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

// Warning: Regex is not allowed for this exercise!
var addNumbers = function(str) {
	var numbers = [];
	strArray = str.split('');
	while(strArray.length > 0) {
		var current = strArray.shift();
		if( !isNaN(current) ) {
			var tempNum = current;
			while( !isNaN(strArray[0]) ) {
				tempNum += strArray.shift();
			}
			numbers.push(tempNum);
		}
	}
	var sum = 0;
	for(var i = 0; i < numbers.length; i++) {
		sum += +numbers[i];
	}
	console.log(sum);
};

addNumbers("88Hello 3World!");
addNumbers("55Hello");
addNumbers("5Hello 5");

// Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.

// Bonus:
// Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.
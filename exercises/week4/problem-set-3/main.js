// Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false. For example: palindrome("racecar") should return true because "racecar" is also "racecar" backwards.

var palindrome = function palindrome(str) {
	if(str === str.split('').reverse().join('')) {
		return true;
	}
	return false;
};

// Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3".
var dashInsert = function dashInsert(num) {
	var str = '';
	num = String(num);
	for(var i = 0; i < num.length; i++) {
		if(i === num.length -1) {
			str += num[i];
			break;
		}
		str += num[i];
		if(num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
			str += '-';
		}
	}
	return str;
};

// Bonus:
// Write a function caesarCipher that takes a string and number parameter and performs a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
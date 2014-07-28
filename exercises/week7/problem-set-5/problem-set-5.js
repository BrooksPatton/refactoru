function alphabetSoup(str) {
	var arr = str.split('');
	arr.sort();
	return arr.join('');
}

function vowelCount(str) {
	var vowels = str.match(/[aAeEiIoOuU]/g);
	return vowels.length;
}

// console.log( alphabetSoup('hello') );
console.log( vowelCount('All cows eat grass') );
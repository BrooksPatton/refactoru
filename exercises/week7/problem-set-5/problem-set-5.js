function alphabetSoup(str) {
	var arr = str.split('');
	arr.sort();
	return arr.join('');
}

console.log( alphabetSoup('hello') );
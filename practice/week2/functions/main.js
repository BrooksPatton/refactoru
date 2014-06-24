var area = function(x, y) {
	return x * y;
};

function logSortOf(target, base) {
	var count = 0;
	var power = 1;
	while(power < target) {
		power *= base;
		count++;
	}
	return count;
}

console.log(log2sortOf(64));
var myMenu = require('./menu.js');

var lunchOrder = process.argv.slice(2);
if(lunchOrder.length === 0) {
	console.log('You must order at least one item');
}
else if(lunchOrder.length > 3) {
	console.log('You must be hungry! But you can\'t order more than 3 things :(');
}
else {
	console.log('Yummm! That sounds good. You have ordered:\n' + lunchOrder.join('\n'));
}

console.log(
	'breakfast: ' + myMenu.breakfast.join(', ') + '\n' +
	'lunch: ' + myMenu.lunch.join(', ')
);
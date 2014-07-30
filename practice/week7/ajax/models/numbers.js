var mongoose = require('mongoose');

var total = 0;

var numbers = {
	addToTotal: function(num) {
		total += +num;
		return total;
	},

	Number: mongoose.model('Number', {
		number: Number
	})
};

module.exports = numbers;
var _ = require('underscore');
var numbers = require('../models/numbers.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	numbers: function(req, res) {
		var num = [];
		for(var i = 0; i < 10; i++) {
			num.push( _.random(0, 100) );
		}
		res.send(num);
	},

	addNumber: function(req, res) {
		var number = req.body.number;
		// res.send( 200, numbers.addToTotal(number) );
		numbers.Number.findOne({}, function(err, value) {
			value.number += +number;
			value.save(function(err) {
				res.send(200, value.number);
			});
		});
		// var num = new numbers.Number({number: number});
		// num.save();
	}
};

module.exports = indexController;
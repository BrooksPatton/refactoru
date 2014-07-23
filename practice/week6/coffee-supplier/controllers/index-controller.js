var products = require('../models/products.js');

var controller = {
	index: function(req, res) {
		res.render('index', {
			coffeeProducts: products
		});
	}
}

module.exports = controller;
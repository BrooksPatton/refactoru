var Product = require('../models/products.js');

var controller = {
	index: function(req, res) {
		Product.list(function(productsArray) {
			res.render('index', {coffeeProducts: productsArray});
		});
	}
}

module.exports = controller;
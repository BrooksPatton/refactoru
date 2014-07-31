var Languages = require('../models/languages.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res) {
		Languages.getLanguages( console.log );

		res.render('translate');
	}
};

module.exports = indexController;
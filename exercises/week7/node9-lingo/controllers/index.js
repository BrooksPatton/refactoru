var Languages = require('../models/languages.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res) {

		res.render('translate', {
			data: Languages.languages
		});
	}
};

module.exports = indexController;
var products = [
	{
		name: 'Dark Roast',
		price: 2.50,
		origin: 'Vietnam'
	},
	{
		name: 'Darker Roast',
		price: 1.2,
		origin: 'Indonesia'
	},
	{
		name: 'Light Roast',
		price: 1.92,
		origin: 'Columbia'
	},
	{
		name: 'Kona',
		price: 2.7,
		origin: 'Hawaii'
	}
];

var Product = {
	list: function(cb) {
		setTimeout(function() {
			cb(products);
		}, 2000);
	}
};

module.exports = Product;
Lander.Airport = function() {
	this.runways = [];
};

Lander.Airport.prototype.buildRunways = function() {
	this.runways.forEach(function(item) {
		$('.airport').append(item.el);
	});
};

Lander.Airport.prototype.activateRunways = function() {
	this.runways.forEach(function(item) {
		item.enable();
	});
};
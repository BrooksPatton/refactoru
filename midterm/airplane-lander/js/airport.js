Lander.Airport = function() {
	this.runways = [];
};

Lander.Airport.prototype.buildRunways = function() {
	this.runways.forEach(function(item) {
		$('.airport').append(item.el);
	});
};

Lander.Airport.prototype.activateRunways = function() {
	this.runways[0].enable(Lander.landAtSmallRunway);
	this.runways[1].enable(Lander.landAtMediumRunway);
	this.runways[2].enable(Lander.landAtLargeRunway);
};
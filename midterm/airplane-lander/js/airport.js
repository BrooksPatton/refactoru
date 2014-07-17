/**
 * Airport constructor
 */
Lander.Airport = function() {
	/**
	 * Array that will hold all of the runways in the game
	 * @type {Array}
	 */
	this.runways = [];
};

/**
 * render the runways to the screen
 * @return {undefined}
 */
Lander.Airport.prototype.buildRunways = function() {
	/**
	 * For each of the runways in the runway array append it to the dom
	 * @param  {append item to the .airport class in the dom} item each runway element
	 * @return {undefined}
	 */
	this.runways.forEach(function(item) {
		$('.airport').append(item.el);
	});
};

/**
 * Enable the runways so that they can be clicked on
 */
Lander.Airport.prototype.activateRunways = function() {
	/**
	 * Enable the small runway
	 */
	this.runways[0].enable(Lander.landAtSmallRunway);
	/**
	 * Enable the medium runway
	 */
	this.runways[1].enable(Lander.landAtMediumRunway);
	/**
	 * Enable the large runway
	 */
	this.runways[2].enable(Lander.landAtLargeRunway);
};
/**
 * The Runway constructor
 * @param {string} size craft the css class that will determine the size of the runway
 */
Lander.Runway = function(size) {
	switch (size) {
		case 'small':
			this.size = 'runway-small';
			break;

		case 'medium':
			this.size = 'runway-medium';
			break;

		case 'large':
			this.size = 'runway-large';
			break;

		default:
			console.log('Please give the Runway a size small medium or large');
	}

	this.status = 'enabled';
};

/**
 * Create the jQuery element of the runway
 */
Lander.Runway.prototype.create = function() {
	this.el = $('<div class="runway col-md-2 col-md-offset-1">');
	this.el.attr('id', this.size);
	this.el.addClass(this.size)
	this.el.append('<img src="images/runway.png">');
};

/**
 * The plane is requesting the position of the runway so that it knows where the land
 * @param  {string} planeSize The size of the plane so the runway can tell the plane what offset it needs to be to land relatively centered
 * @return {object}           The position of the runway for the specific plane
 */
Lander.Runway.prototype.getPosition = function(planeSize) {
	var modifier = 0;
	switch (planeSize) {
		case 'small':
			modifier = 1;
			break;
		case 'medium':
			modifier = -10;
			break;
		case 'large':
			modifier = -25;
			break;
	}
	this.position = $('#' + this.size).position();
	this.position.top += $('#' + this.size).height() + modifier;
	this.position.left += $('#' + this.size).width();
	return this.position;
};

/**
 * Enable the runway for use
 * @param  {Function} callback The callback function to be called when the User clicks on the runway
 */
Lander.Runway.prototype.enable = function (callback) {
	this.el.bind('click', callback);
};

/**
 * Disable the runway when it is in use so that the Player cannot click on it
 * @param  {Function} callback The function that the click event handler had been set to.
 */
Lander.Runway.prototype.disable = function(callback) {
	this.el.unbind('click', callback);
};
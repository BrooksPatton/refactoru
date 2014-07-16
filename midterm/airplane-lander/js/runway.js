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

Lander.Runway.prototype.create = function() {
	this.el = $('<div class="runway col-md-2 col-md-offset-1">');
	this.el.attr('id', this.size);
	this.el.addClass(this.size)
	this.el.append('<img src="images/runway.png">');
};

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

Lander.Runway.prototype.enable = function (callback) {
	this.el.bind('click', callback);
};

Lander.Runway.prototype.disable = function(callback) {
	this.el.unbind('click', callback);
};
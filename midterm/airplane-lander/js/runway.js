Lander.Runway = function(size) {
	switch (size) {
		case 'small':
			this.size = 'runway-small';
			break;

		default:
			console.log('Please give the Runway a size small medium or large');
	}
};

Lander.Runway.prototype.create = function() {
	this.el = $('<div class="runway col-md-2 col-md-offset-1">');
	this.el.addClass(this.size);
	this.el.append('<img src="images/runway.png">');
};
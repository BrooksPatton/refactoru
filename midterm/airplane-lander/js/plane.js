Lander.Plane = function(y) {
	this.y = y || Lander.getRandomHeightInSky();
	this.id = Lander.planeId++;
};

Lander.Plane.prototype.create = function() {
	this.el = $('<i class="plane icon-flight-1">');
	this.el.css({
		top: this.y,
		position: 'absolute'
	});
	this.el.addClass( this.randomSize() );
	this.el.attr('data-id', this.id);
	return this.el;
};

Lander.Plane.prototype.render = function() {
	$('.sky').append(this.el);
};

Lander.Plane.prototype.randomSize = function() {
	var possibleSizes = ['small', 'medium', 'large'];
	return 'icon-' + possibleSizes[ _.random(0, possibleSizes.length -1) ];
};

Lander.Plane.prototype.getStartingXCoordinate = function() {
	return -100;
};

Lander.Plane.prototype.fly = function() {
	var position = this.el.position();
	this.el.css('left', position.left + 1);
};

Lander.Plane.prototype.launch = function() {
	setInterval(this.fly.bind(this), 100);
};
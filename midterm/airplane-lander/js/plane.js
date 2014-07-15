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
	this.x = position.left;
	if(this.x >= Lander.screenWidth - 75 && this.direction === 'right') {
		this.el.css('-webkit-transform', 'rotate(180deg)');
		this.direction = 'left';
	}
	else if(this.x <= 50 && this.direction === 'left') {
		this.el.css('-webkit-transform', 'rotate(0)');
		this.direction = 'right';
	}
	( this.direction === 'right' ) ? this.el.css('left', position.left + Lander.PLANE_SPEED) : this.el.css('left', position.left - Lander.PLANE_SPEED);
	this.render();
};

Lander.Plane.prototype.launch = function() {
	this.flyingInterval = setInterval(this.fly.bind(this), Lander.PLANE_FLY_INTERVAL);
	this.direction = 'right';
};

Lander.Plane.prototype.land = function(runway) {
	clearInterval(this.flyingInterval);
	var runwayPosition = $('#' + runway).position();
	runwayPosition.left += ($('#' + runway).width());
	runwayPosition.top += ( $('#' + runway).height());
	this.el.animate(runwayPosition, Lander.PLANE_LANDING_SPEED);
};

Lander.Plane.prototype.markSelected = function() {
	this.el.addClass('selected');
};

Lander.Plane.prototype.removeSelectedMark = function() {
	this.el.removeClass('selected')
};
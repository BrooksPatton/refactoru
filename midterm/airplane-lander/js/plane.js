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
	this.getNumberOfPassengers();
};

Lander.Plane.prototype.render = function() {
	$('.sky').append(this.el);
};

Lander.Plane.prototype.randomSize = function() {
	var possibleSizes = ['small', 'medium', 'large'];
	this.size = possibleSizes[ _.random(0, possibleSizes.length -1) ];
	return 'icon-' + this.size;
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
	var self = this;
	clearInterval(this.flyingInterval);
	this.el.removeClass('selected');
	var runwayPosition = runway.getPosition();
	if(this.x > runwayPosition.left && this.direction === 'right') {
		this.el.css('-webkit-transform', 'rotate(180deg)');
	}
	else if(this.x < runwayPosition.left && this.direction === 'left') {
		this.el.css('-webkit-transform', 'rotate(0)');
	}
	runway.disable();
	this.el.animate(runwayPosition, {
		duration: Lander.PLANE_LANDING_SPEED,
		queue: false,
		done: function() {
			Lander.score += self.passengerCount;
			self.el.remove();
			runway.enable();
		}
	});
};

Lander.Plane.prototype.markSelected = function() {
	this.el.addClass('selected');
};

Lander.Plane.prototype.removeSelectedMark = function() {
	this.el.removeClass('selected')
};

Lander.Plane.prototype.getNumberOfPassengers = function() {
	switch (this.size) {
		case 'small':
			this.passengerCount = _.random(Lander.MIN_SMALL_PLANE_PASSENGERS, Lander.MAX_SMALL_PLANE_PASSENGERS);
			break;
		case 'medium':
			this.passengerCount = _.random(Lander.MIN_MEDIUM_PLANE_PASSENGERS, Lander.MAX_MEDIUM_PLANE_PASSENGERS);
			break;
		case 'large':
			this.passengerCount = _.random(Lander.MIN_LARGE_PLANE_PASSENGERS, Lander.MAX_LARGE_PLANE_PASSENGERS);
			break;
		default:
			console.log('uh oh, trouble getting the number of passengers.');
	}
};
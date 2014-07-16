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
	this.getFuel();
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
	this.useFuel();
	this.render();
};

Lander.Plane.prototype.launch = function() {
	this.flyingInterval = setInterval(this.fly.bind(this), Lander.PLANE_FLY_INTERVAL);
	this.direction = 'right';
};

Lander.Plane.prototype.land = function(runway, callback) {
	var self = this;
	clearInterval(this.flyingInterval);
	this.el.removeClass('selected');
	var runwayPosition = runway.getPosition(this.size);
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
			Lander.peopleSaved += self.passengerCount;
			self.el.remove();
			runway.enable(callback);
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

Lander.Plane.prototype.getFuel = function() {
	switch (this.size) {
		case 'small':
			this.fuel = _.random(Lander.MAX_SMALL_PLANE_FUEL / 2, Lander.MAX_SMALL_PLANE_FUEL);
			break;
		case 'medium':
			this.fuel = _.random(Lander.MAX_MEDIUM_PLANE_FUEL / 2, Lander.MAX_MEDIUM_PLANE_FUEL);
			break;
		case 'large':
			this.fuel = _.random(Lander.MAX_LARGE_PLANE_FUEL / 2, Lander.MAX_LARGE_PLANE_FUEL);
			break;
	}
};

Lander.Plane.prototype.useFuel = function() {
	this.fuel -= Lander.FUEL_USAGE_RATE;
	switch (this.size) {
		case 'small':
			if(this.fuel < Lander.MAX_SMALL_PLANE_FUEL / 2) {
				this.el.addClass('fuel-half-left')
			}
			if(this.fuel < Lander.MAX_SMALL_PLANE_FUEL / 4) {
				this.el.addClass('fuel-quarter-left')
			}
			break;
		case 'medium':
			if(this.fuel < Lander.MAX_MEDIUM_PLANE_FUEL / 2) {
				this.el.addClass('fuel-half-left')
			}
			if(this.fuel < Lander.MAX_MEDIUM_PLANE_FUEL / 4) {
				this.el.addClass('fuel-quarter-left')
			}
			break;
		case 'large':
			if(this.fuel < Lander.MAX_LARGE_PLANE_FUEL / 2) {
				this.el.addClass('fuel-half-left')
			}
			if(this.fuel < Lander.MAX_LARGE_PLANE_FUEL / 4) {
				this.el.addClass('fuel-quarter-left')
			}
			break;
	}

	if(this.fuel <= 0) {
		this.crashIntoGround();
	}
};

Lander.Plane.prototype.crashIntoGround = function() {
	var self = this;
	var crashLocation = $('.ground').position();
	clearInterval(this.flyingInterval);
	if(this.direction === 'right') {
		crashLocation.left = this.x + Lander.DISTANCE_TO_CRASH;
	}
	else {
		crashLocation.left = this.x - Lander.DISTANCE_TO_CRASH;
	}
	this.el.animate(crashLocation, {
		duration: Lander.PLANE_CRASH_SPEED,
		easing: 'linear',
		done: function() {
			self.el.css('-webkit-transform', 'rotate(0)');
			self.el.removeClass('icon-flight-1');
			self.el.addClass('icon-fire-station');
			Lander.peopleKilled += self.passengerCount;
			Lander.gameOver();
		}
	});
};
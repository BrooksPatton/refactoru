/**
 * The plane constructor
 * @param {number} y number of pixels from the top of the screen that the plane will render
 */
Lander.Plane = function(y) {
	this.y = y || Lander.getRandomHeightInSky();
	/**
	 * The status of the plane. Can be 'flying' or 'crashed'
	 * @type {String}
	 */
	this.status = 'flying';
	/**
	 * The identification number of the plane
	 * @type {number}
	 */
	this.id = Lander.planeId++;
};

/**
 * Create method for the plane object
 */
Lander.Plane.prototype.create = function() {
	/**
	 * Create the jQuery element that will be inserted into the DOM
	 * @type {jQuery object}
	 */
	this.el = $('<i class="plane icon-flight-1">');
	/**
	 * Set the position of the plane
	 */
	this.el.css({
		top: this.y,
		position: 'absolute'
	});
	/**
	 * Set the size of the plane. Can be small, medium, or large
	 */
	this.el.addClass( this.randomSize() );
	/**
	 * Put the planes id into the data attribute of the element
	 */
	this.el.attr('data-id', this.id);
	/**
	 * Set the number of passengers in the plane
	 */
	this.getNumberOfPassengers();
	/**
	 * Get the amount of fuel in the plane
	 */
	this.getFuel();
};

/**
 * Render the plane to the dom
 */
Lander.Plane.prototype.render = function() {
	/**
	 * Append the plane element to the sky class in the dom
	 */
	$('.sky').append(this.el);
};

/**
 * Get the size of the plane
 * @return {string} The size will be the class that will be appended to the element
 */
Lander.Plane.prototype.randomSize = function() {
	/**
	 * Array of possible plane sizes
	 * @type {Array}
	 */
	var possibleSizes = ['small', 'medium', 'large'];
	/**
	 * Use underscore to get a random size from the possibleSizes array
	 * @type {string}
	 */
	this.size = possibleSizes[ _.random(0, possibleSizes.length -1) ];
	/**
	 * Return the class that will be appended to the element
	 */
	return 'icon-' + this.size;
};

/**
 * Get the starting x coordinate for the plane
 * @return {number} The pixels for positioning from the left of the screen
 */
Lander.Plane.prototype.getStartingXCoordinate = function() {
	return -100;
};

/**
 * Fly the plane accross the screen
 */
Lander.Plane.prototype.fly = function() {
	/**
	 * Get the current position of the plane
	 * @type {object}
	 */
	var position = this.el.position();
	/**
	 * Position of the plane from the left of the screen
	 * @type {number}
	 */
	this.x = position.left;
	/**
	 * if the plane is getting close to the right side of the screen, turn around and head back
	 */
	if(this.x >= Lander.screenWidth - 75 && this.direction === 'right') {
		this.el.css('-webkit-transform', 'rotate(180deg)');
		this.direction = 'left';
	}
	/**
	 * if the plane is getting close to the left side of the screen, turn around and head back
	 */
	else if(this.x <= 50 && this.direction === 'left') {
		this.el.css('-webkit-transform', 'rotate(0)');
		this.direction = 'right';
	}
	/**
	 * if we are heading right, then move 1 unit to the right, otherwise head 1 unit to the left
	 */
	( this.direction === 'right' ) ? this.el.css('left', position.left + Lander.PLANE_SPEED) : this.el.css('left', position.left - Lander.PLANE_SPEED);
	/**
	 * Spend a unit of fuel
	 */
	this.useFuel();
	/**
	 * Render the plane to the screen, since the plane can only be in one place at a time the plane will move instead of being replicated
	 */
	this.render();
	/**
	 * Check if we are running into other planes
	 */
	this.detectCollision();
};

/**
 * Start flying the plane
 */
Lander.Plane.prototype.launch = function() {
	/**
	 * Starting an interval and holding its id so that we can stop the interval later
	 * @type {number}
	 */
	this.flyingInterval = setInterval(this.fly.bind(this), Lander.PLANE_FLY_INTERVAL);
	/**
	 * We are always coming in from the right side of the screen
	 * @type {String}
	 */
	this.direction = 'right';
};

/**
 * Land the plane at a runway
 * @param  {instance of a runway}   runway   The runway that the plane is landing at
 * @param  {Function} callback The callback function to pass to the enable method of the runway
 */
Lander.Plane.prototype.land = function(runway, callback) {
	/**
	 * For scoping
	 */
	var self = this;
	/**
	 * Set the planes status to landing so it cannot be crashed into
	 * @type {String}
	 */
	this.status = 'landing';
	/**
	 * Stop the plane from flying. This prevents it from checking for collisions and from using more fuel
	 */
	clearInterval(this.flyingInterval);
	/**
	 * If the plane was selected, unselect it so that the white border around the plane will dissapear
	 */
	this.el.removeClass('selected');
	/**
	 * Find out where the runway is
	 * @type {object}
	 */
	var runwayPosition = runway.getPosition(this.size);
	/**
	 * Turn to face the runway if we are on the wrong side
	 */
	if(this.x > runwayPosition.left && this.direction === 'right') {
		this.el.css('-webkit-transform', 'rotate(180deg)');
	}
	else if(this.x < runwayPosition.left && this.direction === 'left') {
		this.el.css('-webkit-transform', 'rotate(0)');
	}
	/**
	 * Players cannot click on the runway while it is in use
	 */
	runway.disable();
	/**
	 * Animate the landing at the runway
	 */
	this.el.animate(runwayPosition, {
		duration: Lander.PLANE_LANDING_SPEED,
		/**
		 * We want multiple planes to be able to land at the same time
		 * @type {Boolean}
		 */
		queue: false,
		/**
		 * When the animation has finished
		 */
		done: function() {
			/**
			 * Update the number of people who have been saved
			 */
			Lander.peopleSaved += self.passengerCount;
			/**
			 * Remove the plane from the dom to clear the runway
			 */
			self.el.remove();
			/**
			 * We want the player to be able to use the runway again
			 */
			runway.enable(callback);
		}
	});
};

/**
 * Show a border around the plane that the player clicked on
 */
Lander.Plane.prototype.markSelected = function() {
	this.el.addClass('selected');
};

/**
 * Remove the border around the plane as it isn't selected anymore
 */
Lander.Plane.prototype.removeSelectedMark = function() {
	this.el.removeClass('selected')
};

/**
 * Get the number of passengers for the plane. Passengers are going to be randomized based upon the size of the plane. The larger the plane, the more passengers
 */
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

/**
 * Set the amount of fuel that the plane has. The larger the plane, the bigger the fuel tank.
 * All planes start with over half a fuel tank.
 */
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

/**
 * Use a unit of fuel, which is defined in lander.js
 * When the plane has half a tank or less of fuel left, then turn the plane yellow
 * When the plane has a quarter of a tank or less of fuel left, then turn the plane red
 * When the plane runs out of fuel, crash into the ground
 */
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

/**
 * Crash the plane into the ground after it ran out of fuel
 */
Lander.Plane.prototype.crashIntoGround = function() {
	var self = this;
	var crashLocation = $('.ground').position();
	this.status = 'crashed';
	/**
	 * We need to stop the plane from flying normally
	 */
	clearInterval(this.flyingInterval);
	/**
	 * We are going to fly forward a little bit while falling to the ground. We need to figure out
	 * where our crash point on the ground is based on which direction we are flying
	 */
	if(this.direction === 'right') {
		crashLocation.left = this.x + Lander.DISTANCE_TO_CRASH;
	}
	else {
		crashLocation.left = this.x - Lander.DISTANCE_TO_CRASH;
	}
	this.el.animate(crashLocation, {
		duration: Lander.PLANE_CRASH_SPEED,
		/**
		 * We want the crash to be fast, not start slow and end slow like the default animation
		 */
		easing: 'linear',
		/**
		 * When the animation is finished, run this function
		 */
		done: function() {
			/**
			 * We want the fire to be right-side up
			 */
			self.el.css('-webkit-transform', 'rotate(0)');
			/**
			 * Change the icon from a plane to fire
			 */
			self.el.removeClass('icon-flight-1');
			self.el.addClass('icon-fire-station');
			Lander.peopleKilled += self.passengerCount;
			/**
			 * Remove the plane from the array of planes so we won't have too many collision detections at the same time
			 */
			self.delete();
			/**
			 * If we are playing a game type that requires us to stop on crashing, then stop the game now
			 */
			if(Lander.game.stopOnCrash) {
				Lander.gameOver();
			}
		}
	});
};

/**
 * Stop the plane from flying, using fuel, and detecting collisions
 */
Lander.Plane.prototype.stopFlying = function() {
	clearInterval(this.flyingInterval);
};

/**
 * Detect if this plane is colliding with any of the other flying or crashing planes. Landing planes are immune and cannot cause crashes
 */
Lander.Plane.prototype.detectCollision = function() {
	var myPosition = this.el.position();
	/**
	 * Get all of the planes accept myself
	 */
	var otherPlanes = _.reject(Lander.planeList, function(plane){return this === plane}.bind(this));
	/**
	 * Now we are going to strip out all of the landing planes
	 */
	otherPlanes = _.reject(otherPlanes, function(plane){return plane.status === 'landing'}.bind(this));
	/**
	 * For each plane, check to see if any of my plane is within the box of the other plane
	 */
	otherPlanes.forEach(function(plane) {
		var otherPlanePosition = plane.el.position();
		if(
			myPosition.left < otherPlanePosition.left + plane.el.width() - Lander.HIT_DETECTION_OFFSET && 
			myPosition.left + this.el.width() - Lander.HIT_DETECTION_OFFSET > otherPlanePosition.left &&
			myPosition.top < otherPlanePosition.top + plane.el.height() &&
			myPosition.top + this.el.height() > otherPlanePosition.top ) {
			this.explodeFromCollision();
		}
	}.bind(this));
};

/**
 * The plane will explode after it collides with another plane
 */
Lander.Plane.prototype.explodeFromCollision = function() {
	var crashLocation = $('.ground').position();
	this.status = 'crashed';
	crashLocation.left = this.x;
	clearInterval(this.flyingInterval);
	this.el.removeClass('icon-flight-1');
	this.el.addClass('icon-fire-station');
	this.el.addClass('red');
	this.el.animate(crashLocation, {
		duration: Lander.PLANE_CRASH_SPEED,
		easing: 'linear',
		done: function() {
			Lander.peopleKilled += this.passengerCount;
			this.delete();
			if(Lander.game.stopOnCrash) {
				Lander.gameOver();
			}
		}.bind(this)
	});
};

/**
 * Delete the plane from the Lander.planeList array so that other planes won't check it for potential collisions
 */
Lander.Plane.prototype.delete = function() {
	var index = _.indexOf(Lander.planeList, this);
	Lander.planeList.splice(index, 1);
};
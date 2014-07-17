/**
 * The namespace for the game
 * @return {object} Returning everything that we want the other javascript files to be able to access
 */
var Lander = (function() {
	// Constants
	/**
	 * How often the plane moves forward in miliseconds
	 * @type {Number}
	 */
	var PLANE_FLY_INTERVAL = 10;
	/**
	 * How often new planes enter the screen
	 * @type {Number}
	 */
	var PLANE_LAUNCH_INTERVAL = 2500;
	/**
	 * How many pixels does the plane move at a time
	 * @type {Number}
	 */
	var PLANE_SPEED = 1;
	/**
	 * How long does it take for the plane to land in miliseconds
	 * @type {Number}
	 */
	var PLANE_LANDING_SPEED = 10000;
	var MAX_SMALL_PLANE_PASSENGERS = 50;
	var MIN_SMALL_PLANE_PASSENGERS = 1;
	var MAX_MEDIUM_PLANE_PASSENGERS = 150;
	var MIN_MEDIUM_PLANE_PASSENGERS = 51;
	var MAX_LARGE_PLANE_PASSENGERS = 250;
	var MIN_LARGE_PLANE_PASSENGERS = 151;
	/**
	 * Maximum fuel for the planes. The planes will start with at least half a tank of fuel.
	 * @type {Number}
	 */
	var MAX_SMALL_PLANE_FUEL = 1000;
	var MAX_MEDIUM_PLANE_FUEL = 5000;
	var MAX_LARGE_PLANE_FUEL = 10000;
	var FUEL_USAGE_RATE = 1;
	/**
	 * How far should the plane fly horizontally after it runs out of fuel on the way down.
	 * @type {Number}
	 */
	var DISTANCE_TO_CRASH = 50;
	/**
	 * How fast the planes take to reach the ground once they start crashing.
	 * @type {Number}
	 */
	var PLANE_CRASH_SPEED = 500;

	//variables
	/**
	 * variable to hold the airport instance
	 * @type {Object}
	 */
	var airport = {};
	var planeList = [];
	/**
	 * The plane constructor uses and updates this to give each plane a unique id
	 * @type {Number}
	 */
	var planeId = 0;
	var screenWidth = $(window).width();
	var selectedPlane = {};
	var peopleSaved = 0;
	var peopleKilled = 0;
	/**
	 * Variable to hold the setinterval id so that we can stop generating new planes eventually
	 */
	var newPlanesInterval;
	var gameType;
	/**
	 * the game object goes here so that everybody can access the game instance
	 * @type {Object}
	 */
	var game = {};

	//functions
	/**
	 * Allow the player to decide what game mode they want to play, and launch the game that they requested
	 */
	var displayGameModeDescription = function() {
		/**
		 * The player needs to not be able to select multiple buttons at the same time.
		 */
		$(this).siblings('button').removeClass('btn-primary').addClass('btn-default');
		Lander.gameType = $(this).data('game');
		var html = $('<p>');
		switch ( Lander.gameType ) {
			case 'time-trial':
				html.append('You get 60 seconds to land as many planes as possible. Your score will be based on the number of passengers safely delivered to the Airport. Passengers who don\'t make it will be subracted from your score.');
				break;				

			case 'perfection':
				html.append('The game ends as soon as a plane is lost. How many passengers can you land until a plane crashes.');
				break;
		}

		$('.game-explanation').html(html);
		$(this).removeClass('btn-default');
		$(this).addClass('btn-primary');
		$('#start-game').removeAttr('disabled');
	};

	/**
	 * Initialize the Airport, create the runways, and render them to the screen
	 */
	var initAirport = function() {
		airport = new Lander.Airport();
		airport.runways.push( buildRunway('small') );
		airport.runways.push( buildRunway('medium') );
		airport.runways.push( buildRunway('large') );
		airport.buildRunways();
		airport.activateRunways();
	};

	/**
	 * Build the runway
	 * @param  {string} size The size of the runway to build
	 * @return {jQuery object}      Returns the runway element
	 */
	var buildRunway = function(size) {
		var runway = new Lander.Runway(size);
		runway.create();
		return runway;
	};

	/**
	 * Time to start generating planes in the sky
	 */
	var startGame = function() {
		newPlanesInterval = setInterval(Lander.newPlane, Lander.PLANE_LAUNCH_INTERVAL);
	};

	/**
	 * Get a random point in the sky where the plane will spawn. Making sure that the plan doesn't spawn too high up for low down.
	 * @return {number} A random number inside the sky class
	 */
	var getRandomHeightInSky = function() {
		var skyHeight = $('.sky').height();
		var randomHeight = _.random(10, skyHeight - 75);
		return randomHeight;
	};

	/**
	 * Generate an instance of a new plane and render it to the screen. Adding it to the planeList array for later access
	 * @param  {number} y Generate a plane at altitude y
	 * @return {instance}   The plane instance
	 */
	var newPlane = function(y) {
		var plane = new Lander.Plane(y);
		planeList.push(plane);
		plane.create();
		plane.render();
		plane.launch();
		return plane;
	};

	/**
	 * Check to see if objects a and b are colliding
	 * @param  {object} a Plane object
	 * @param  {object} b Plane object
	 */
	var checkCollision = function(a, b) {
		return !(
			((a.y + a.height) < (b.y)) ||
			(a.y > (b.y + b.height)) ||
			((a.x + a.width) < b.x) ||
			(a.x > (b.x + b.width))
		);
	};

	/**
	 * The player just clicked on a plane in the air. Remove all of the planes borders if they have any, and then call the markSelected method on the clicked plane in order to surround it with a border.
	 */
	var selectPlane = function() {
		var id = $(this).data('id');
		selectedPlane = _.findWhere(planeList, {id: id});

		planeList.forEach(function(item) {
			item.removeSelectedMark();
		});

		selectedPlane.markSelected();
	};

	/**
	 * The player clicked on the small runway. Check if we can land their, and if so, send the plane to the small runway
	 */
	var landAtSmallRunway = function() {
		if( selectedPlane.el.hasClass('icon-small') && selectedPlane.status !== 'crashed' ) {
			var runway = _.findWhere(airport.runways, {size: 'runway-small'});
			selectedPlane.land(runway, Lander.landAtSmallRunway);
		}
		else {
			console.log('too big');
		}
	};

/**
 * The player clicked on the medium runway. Check if we can land there, and if so, send the plane to the medium runway
 */
	var landAtMediumRunway = function() {
		if( selectedPlane.el.hasClass('icon-medium') || selectedPlane.el.hasClass('icon-small') && selectedPlane.status !== 'crashed' ) {
			var runway = _.findWhere(airport.runways, {size: 'runway-medium'});
			selectedPlane.land(runway, Lander.landAtMediumRunway);
		}
		else {
			console.log('too big');
		}
	};

	/**
	 * The player clicked on the large runway. Check if we can land there, and if so, send the plane to the large runway
	 */
	var landAtLargeRunway = function() {
		if( selectedPlane.el.hasClass('icon-large') || selectedPlane.el.hasClass('icon-medium') || selectedPlane.el.hasClass('icon-small') && selectedPlane.status !== 'crashed') {
			var runway = _.findWhere(airport.runways, {size: 'runway-large'});
			selectedPlane.land(runway, Lander.landAtLargeRunway);
		}
		else {
			console.log('too big');
		}
	};

	/**
	 * The game has ended. show the end game screen and stop all of the timers.
	 */
	var gameOver = function() {
		clearInterval(newPlanesInterval);
		planeList.forEach(function(item) {
			item.stopFlying();
		});
		$('.sky').off('mousedown', '.plane');
		$('#people-saved').text(this.peopleSaved);
		$('#people-killed').text(this.peopleKilled);
		$('#total-score').text( this.peopleSaved - this.peopleKilled );
		$('.game-over').removeClass('hidden')
	};

	/**
	 * Clean up planes from the planesList so that they won't be checked for collisions.
	 */
	var cleanUpPlanesList = function() {
		planeList = _.reject(planeList, function(item) {return item.status === 'crashed'});
	};

	//return
	return {
		gameType: gameType,
		initAirport: initAirport,
		getRandomHeightInSky: getRandomHeightInSky,
		newPlane: newPlane,
		planeId: planeId,
		screenWidth: screenWidth,
		planeList: planeList,
		checkCollision: checkCollision,
		PLANE_FLY_INTERVAL: PLANE_FLY_INTERVAL,
		PLANE_LAUNCH_INTERVAL: PLANE_LAUNCH_INTERVAL,
		selectPlane: selectPlane,
		landAtSmallRunway: landAtSmallRunway,
		landAtMediumRunway: landAtMediumRunway,
		landAtLargeRunway: landAtLargeRunway,
		PLANE_SPEED: PLANE_SPEED,
		PLANE_LANDING_SPEED: PLANE_LANDING_SPEED,
		buildRunway: buildRunway,
		startGame: startGame,
		MAX_SMALL_PLANE_PASSENGERS: MAX_SMALL_PLANE_PASSENGERS,
		MAX_MEDIUM_PLANE_PASSENGERS: MAX_MEDIUM_PLANE_PASSENGERS,
		MAX_LARGE_PLANE_PASSENGERS: MAX_LARGE_PLANE_PASSENGERS,
		MIN_SMALL_PLANE_PASSENGERS: MIN_SMALL_PLANE_PASSENGERS,
		MIN_MEDIUM_PLANE_PASSENGERS: MIN_MEDIUM_PLANE_PASSENGERS,
		MIN_LARGE_PLANE_PASSENGERS: MIN_LARGE_PLANE_PASSENGERS,
		airport: airport,
		peopleSaved: peopleSaved,
		MAX_SMALL_PLANE_FUEL: MAX_SMALL_PLANE_FUEL,
		MAX_MEDIUM_PLANE_FUEL: MAX_MEDIUM_PLANE_FUEL,
		MAX_LARGE_PLANE_FUEL: MAX_LARGE_PLANE_FUEL,
		FUEL_USAGE_RATE: FUEL_USAGE_RATE,
		DISTANCE_TO_CRASH: DISTANCE_TO_CRASH,
		PLANE_CRASH_SPEED: PLANE_CRASH_SPEED,
		gameOver: gameOver,
		newPlanesInterval: newPlanesInterval,
		peopleKilled: peopleKilled,
		cleanUpPlanesList: cleanUpPlanesList,
		selectedPlane: selectedPlane,
		displayGameModeDescription: displayGameModeDescription,
		game: game
	};
})();
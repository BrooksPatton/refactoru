var Lander = (function() {
	// Constants
	var PLANE_FLY_INTERVAL = 10;
	var PLANE_LAUNCH_INTERVAL = 3000;
	var PLANE_SPEED = 1;
	var PLANE_LANDING_SPEED = 10000;
	var MAX_SMALL_PLANE_PASSENGERS = 50;
	var MIN_SMALL_PLANE_PASSENGERS = 1;
	var MAX_MEDIUM_PLANE_PASSENGERS = 150;
	var MIN_MEDIUM_PLANE_PASSENGERS = 51;
	var MAX_LARGE_PLANE_PASSENGERS = 250;
	var MIN_LARGE_PLANE_PASSENGERS = 151;
	var MAX_SMALL_PLANE_FUEL = 1000;
	var MAX_MEDIUM_PLANE_FUEL = 5000;
	var MAX_LARGE_PLANE_FUEL = 10000;
	var FUEL_USAGE_RATE = 1;
	var DISTANCE_TO_CRASH = 50;
	var PLANE_CRASH_SPEED = 1000;

	//variables
	var airport = {};
	var planeList = [];
	var planeId = 0;
	var screenWidth = $(window).width();
	var selectedPlane = {};
	var peopleSaved = 0;
	var peopleKilled = 0;
	var newPlanesInterval;

	//functions
	var initAirport = function() {
		airport = new Lander.Airport();
		airport.runways.push( buildRunway('small') );
		airport.runways.push( buildRunway('medium') );
		airport.runways.push( buildRunway('large') );
		airport.buildRunways();
		airport.activateRunways();
	};

	var buildRunway = function(size) {
		var runway = new Lander.Runway(size);
		runway.create();
		return runway;
	};

	var startGame = function() {
		newPlanesInterval = setInterval(Lander.newPlane, Lander.PLANE_LAUNCH_INTERVAL);
	};

	var getRandomHeightInSky = function() {
		var skyHeight = $('.sky').height();
		var randomHeight = _.random(10, skyHeight - 75);
		return randomHeight;
	};

	var newPlane = function(y) {
		var plane = new Lander.Plane(y);
		planeList.push(plane);
		plane.create();
		plane.render();
		plane.launch();
		return plane;
	};

	var checkCollision = function(a, b) {
		return !(
			((a.y + a.height) < (b.y)) ||
			(a.y > (b.y + b.height)) ||
			((a.x + a.width) < b.x) ||
			(a.x > (b.x + b.width))
		);
	};

	var selectPlane = function() {
		var id = $(this).data('id');
		selectedPlane = _.findWhere(planeList, {id: id});

		planeList.forEach(function(item) {
			item.removeSelectedMark();
		});

		selectedPlane.markSelected();
	};

	var landAtSmallRunway = function() {
		if( selectedPlane.el.hasClass('icon-small') ) {
			var runway = _.findWhere(airport.runways, {size: 'runway-small'});
			selectedPlane.land(runway, Lander.landAtSmallRunway);
		}
		else {
			console.log('too big');
		}
	};

	var landAtMediumRunway = function() {
		if( selectedPlane.el.hasClass('icon-medium') || selectedPlane.el.hasClass('icon-small') ) {
			var runway = _.findWhere(airport.runways, {size: 'runway-medium'});
			selectedPlane.land(runway, Lander.landAtMediumRunway);
		}
		else {
			console.log('too big');
		}
	};

	var landAtLargeRunway = function() {
		if( selectedPlane.el.hasClass('icon-large') || selectedPlane.el.hasClass('icon-medium') || selectedPlane.el.hasClass('icon-small') ) {
			var runway = _.findWhere(airport.runways, {size: 'runway-large'});
			selectedPlane.land(runway, Lander.landAtLargeRunway);
		}
		else {
			console.log('too big');
		}
	};

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

	var cleanUpPlanesList = function() {
		planeList = _.reject(planeList, function(item) {return item.status === 'crashed'});
	};

	//return
	return {
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
		selectedPlane: selectedPlane
	};
})();
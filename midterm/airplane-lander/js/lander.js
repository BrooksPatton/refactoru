var Lander = (function() {
	// Constants
	var PLANE_FLY_INTERVAL = 50;
	var PLANE_LAUNCH_INTERVAL = 10000;
	var PLANE_SPEED = 1;
	var PLANE_LANDING_SPEED = 10000;

	//variables
	var planeList = [];
	var planeId = 0;
	var screenWidth = $(window).width();
	var selectedPlane = {};

	//functions
	var buildRunway = function(size) {
		var runway = new Lander.Runway(size);
		runway.create();
	};

	var deployRunways = function() {
		
	};

	var getRandomHeightInSky = function() {
		var skyHeight = $('.sky').height();
		var randomHeight = _.random(10, skyHeight - 75);
		return randomHeight;
	};

	var newPlane = function(y) {
		var plane = new Lander.Plane(y);
		plane.create();
		plane.render();
		plane.launch();
		planeList.push(plane);
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
			selectedPlane.land('runway-small');
		}
		else {
			console.log('too big');
		}
	};

	//return
	return {
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
		PLANE_SPEED: PLANE_SPEED,
		PLANE_LANDING_SPEED: PLANE_LANDING_SPEED,
		buildRunways: buildRunways,
		deployRunways: deployRunways
	}
})();
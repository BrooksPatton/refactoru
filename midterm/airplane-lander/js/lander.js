var Lander = (function() {
	//variables
	var planeList = [];
	var planeId = 0;
	var screenWidth = $(window).width();

	//functions
	var getRandomHeightInSky = function() {
		var skyHeight = $('.sky').height();
		var randomHeight = _.random(10, skyHeight - 75);
		return randomHeight;
	};

	var newPlane = function() {
		var plane = new Lander.Plane();
		plane.create();
		plane.render();
		plane.launch();
	};

	//return
	return {
		getRandomHeightInSky: getRandomHeightInSky,
		newPlane: newPlane,
		planeId: planeId,
		screenWidth: screenWidth
	}
})();
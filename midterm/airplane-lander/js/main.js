$(document).on('ready', function() {
	Lander.initAirport();

	Lander.buildRunway('small');

	Lander.deployRunways();

	setInterval(Lander.newPlane, Lander.PLANE_LAUNCH_INTERVAL);
	$('.sky').on('mousedown', '.plane', Lander.selectPlane);
});  

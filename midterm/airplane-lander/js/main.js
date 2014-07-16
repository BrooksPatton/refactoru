$(document).on('ready', function() {
	Lander.initAirport();

	Lander.buildRunway('small');

	Lander.startGame();

	$('.sky').on('mousedown', '.plane', Lander.selectPlane);
});  

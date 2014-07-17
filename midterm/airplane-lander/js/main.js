$(document).on('ready', function() {
	// Create an instance of the GameEngine constructor
	var game = new Lander.GameEngine();

	// Start the engine
	game.start();
	
	Lander.initAirport();

	Lander.buildRunway('small');

	Lander.startGame();

	$('#time-trial').on('click', Lander.displayGameModeDescription);
	$('.sky').on('mousedown', '.plane', Lander.selectPlane);
});  

$(document).on('ready', function() {
	// Create an instance of the GameEngine constructor
	var game = new Lander.GameEngine();

	// Start the engine
	game.start();
	
	// Lander.initAirport();

	// Lander.buildRunway('small');

	// Lander.startGame();

	$('.game-type').on('click', Lander.displayGameModeDescription);
	$('#start-game').on('click', game.launchGame.bind(game));
	// $('.sky').on('mousedown', '.plane', Lander.selectPlane);
});  

$(document).on('ready', function() {
	// Create an instance of the GameEngine constructor
	Lander.game = new Lander.GameEngine();

	// Start the engine
	Lander.game.start();
	
	// Lander.initAirport();

	// Lander.buildRunway('small');

	// Lander.startGame();

	$('.game-type').on('click', Lander.displayGameModeDescription);
	$('#start-game').on('click', Lander.game.launchGame.bind(Lander.game));
	// $('.sky').on('mousedown', '.plane', Lander.selectPlane);
});  

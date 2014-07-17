$(document).on('ready', function() {
	/**
	 * Creating an instance of the game in the Lander namespace so that everybody else can access the game object
	 * @type {instance}
	 */
	Lander.game = new Lander.GameEngine();

	/**
	 * Start the game engine
	 */
	Lander.game.start();
	
	/**
	 * Click handler for the game types when the player first loads the page
	 */
	$('.game-type').on('click', Lander.displayGameModeDescription);
	/**
	 * Click handler for starting the game after the player has chosen which game mode they want to play.
	 */
	$('#start-game').on('click', Lander.game.launchGame.bind(Lander.game));
});  

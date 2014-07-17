/**
 * The game engine constructor
 */
Lander.GameEngine = function() {
};

/**
 * Start the game by showing the launcher window
 */
Lander.GameEngine.prototype.start = function() {
	// Show the Launch screen where Players can choose game modes and start the game
	$('.launcher').removeClass('hidden');
};

/**
 * Launch the game, depending on the game mode selected by the Player
 */
Lander.GameEngine.prototype.launchGame = function() {
	if(Lander.gameType === 'timeTrial') {
		this.startTimeTrialGame();
	}
	else if(Lander.gameType === 'perfection') {
		this.startPerfectionGame();
	}
};

/**
 * Start a time trial game
 */
Lander.GameEngine.prototype.startTimeTrialGame = function() {
	Lander.initAirport();
	Lander.startGame();
	$('.sky').on('mousedown', '.plane', Lander.selectPlane);
	$('.launcher').hide();
	setTimeout(Lander.gameOver.bind(Lander), 60000);
	this.stopOnCrash = false;
};

/**
 * Start a Perfection game
 */
Lander.GameEngine.prototype.startPerfectionGame = function() {
	Lander.initAirport();
	Lander.startGame();
	$('.sky').on('mousedown', '.plane', Lander.selectPlane);
	$('.launcher').hide();
	this.stopOnCrash = true;
};
Lander.GameEngine = function() {
};

Lander.GameEngine.prototype.start = function() {
	// Show the Launch screen where Players can choose game modes and start the game
	$('.launcher').removeClass('hidden');
};

Lander.GameEngine.prototype.launchGame = function() {
	if(Lander.gameType === 'time-trial') {
		this.startTimeTrialGame();
	}
};

Lander.GameEngine.prototype.startTimeTrialGame = function() {
	Lander.initAirport();
	Lander.startGame();
	$('.sky').on('mousedown', '.plane', Lander.selectPlane);
	$('.launcher').hide();
	setTimeout(Lander.gameOver.bind(Lander), 60000);
};
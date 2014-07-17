$(document).on('ready', function() {
	/**
	 * Initialize connectiong with Parse.com. Parse will be used as a replacement for a database, and will store scores and the initials of the players who made them.
	 */
	Parse.initialize("l4G3e2mCWR4KGbUmqiTftO9QDOeISbcTFXhN4XSW", "Plvw6UkZq1y8gLsrqN6ddTvwTuIGmj8oyk09Mmud");
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
	/**
	 * The player is submitting their score to the server
	 */
	$('#send-score-to-server-form').on('click', 'button', function(e) {
		e.preventDefault();
		var playerInitials = $('#send-score-to-server-form [name="initials"]').val();
		var peopleKilled = Lander.peopleKilled;
		var peopleSaved = Lander.peopleSaved;
		var totalScore = peopleSaved - peopleKilled;
		var gameType = Lander.gameType;
		var gameScore = new Parse.Object(gameType);
		gameScore.save({
			'player': playerInitials,
			'killed': peopleKilled,
			'saved': peopleSaved,
			'totalScore': totalScore
		}).then(
			function() {
				Lander.gameScoreSaved();
			});
	});
});  

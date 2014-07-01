/**
 * List of games to display to the screen
 * @type {Array}
 */
var gamesList = [];

/**
 * Pushing a game to the gamesList as a test
 * @type {String}
 */
gamesList.push( {
	title: 'braid',
	description: 'Kind of like Mario, but with time manipulation.'
})

/**
 * Pushing a second game to the gamesList as a test
 * @type {String}
 */
gamesList.push( {
	title: 'Donkey Kong',
	description: 'Kind of like Mario, but with a Gorilla looking for his lost Grandfather.'
})

/**
 * This should clear current view and update 
 * with the gameList items
 */
var renderList = function renderList() {
	/**
	 * Empty out the games list
	 */
	$('#games-list').empty();
	/**
	 * Loop through all of the games,
	 * create a dom element for each game
	 * @type {Number}
	 */
	for(var i = 0; i < gamesList.length; i++) {
		var newListItem = $('<li>');
		newListItem.append('<h4>' + gamesList[i].title + '</h4>');
		newListItem.append('<p>' + gamesList[i].description + '</p>');
		var actionsContainer = $('<span class="actions"><button class="delete">Delete</button></span>');
		actionsContainer.appendTo(newListItem);
		newListItem.appendTo('#games-list');
		gamesList[i].display = newListItem;
	}
}

var newGameSubmit = function newGameSubmit(eventArguments) {
	/**
	 * Prevent the form from refreshing the page
	 */
	eventArguments.preventDefault();
	/**
	 * Get the title object
	 * @type jQuery object
	 */
	var titleField = $(this).find('[name=title]');
	/**
	 * Get the description object
	 * @type {jQuery object}
	 */
	var descriptionField = $(this).find('[name=description]');
	var gameTitle = titleField.val();
	var gameDescription = descriptionField.val();
	var newGameItem = {
		title: gameTitle,
		description: gameDescription
	};
	gamesList.push(newGameItem);
	renderList();
	titleField.val('');
	descriptionField.val('');
	titleField.focus();
};

var deleteGame = function deleteGame(eventArguments) {
	eventArguments.preventDefault();
	var gameDisplay = $(this).closest('li');
	for(var i = 0; i < gamesList; i++) {
		console.log( gamesList[i].display.get(0) );
		if( gamesList[i].display.get(0) === gameDisplay.get(0) ) {
			gamesList[i].display.remove();
			gamesList.splice( i, 1 )
			break;
		}
	}
};

$(document).on('ready', function() {
	/**
	 * Kick of the process by displaying the gamesList to the screen
	 */
  renderList();

  $('#new-game').on('submit', newGameSubmit);
  $(document).on('click', '.delete', deleteGame);

});
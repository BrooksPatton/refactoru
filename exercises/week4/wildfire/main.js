/**
 * Wildfire IIFE
 * @return {namespace} Wildfire namespace for game
 */
var Wildfire = (function() {
	// ----------- variable declarations
	/**
	 * Until the User selects the campfire or the lake set selected to null
	 * @type {string}
	 */
	var selected = null;

	// ----------- Callback declarations
	/**
	 * When the User clicks on the link, place a border around the lake button and set the selected variable to the btn-primary (blue) string
	 * @return {undefined}
	 */
	var selectLake = function() {
		/**
		 * Place a dotted border around the Lake button
		 * @type {css}
		 */
		$(this).css({
			border: '1px dotted gray',
			padding: 2
		});
		/**
		 * Set the selected variable to be blue (btn-primary with backbone)
		 * @type {String}
		 */
		selected = 'btn-primary';
	};

	/**
	 * When a User clicks on one of the land pieces, wet or fire the land depending on the button the User clicked on on the left.
	 * @return {undefined}
	 */
	var selectLand = function() {
		/**
		 * If the User has selected the Lake or Campfire button
		 */
		if(selected) {

			/**
			 * The button will have the btn-default class if it hasn't been clicked on or burned yet
			 */
			if($(this).hasClass('btn-default')) {
				/**
				 * Remove the btn default class so that we can append another class.
				 */
				$(this).removeClass('btn-default');
			}

			/**
			 * Turn the button the color of the Lake or Campfire respectively
			 */
			$(this).addClass(selected);
		}
		/**
		 * Neither the Lake nor the Campfire has been selected
		 */
		else {
			alert('Please select the lake or campfire.');
		}

	};

	/**
	 * Return what we want to be public in the namespace
	 */
	return {
		selectLake: selectLake,
		selectLand: selectLand
	};

})();

$(function() {

	/**
	 * User clicked on the lake button
	 */
	$('#lake').on('click', Wildfire.selectLake);
	/**
	 * User clicked on one of the land buttons
	 */
	$('#land a').on('click', Wildfire.selectLand);


});

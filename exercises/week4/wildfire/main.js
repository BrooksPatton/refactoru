// Constant declaration
var HEAT_SPREAD_RATE = 100;
var FIRE_SPREAD_RATE = 300;

/**
 * Wildfire IIFE
 * @return {namespace} Wildfire namespace for game
 */
 var Wildfire = (function() {
	// ----------- Constant variable declarations

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
		//Reset the other buttons borders
		resetPowerButtons();

		/**
		 * Place a dotted border around the Lake button
		 * @type {css}
		 */
		 $(this).addClass('selected-power');
		/**
		 * Set the selected variable to be blue (btn-primary with backbone)
		 * @type {String}
		 */
		 selected = 'btn-primary';
		};

	/**
	 * When the User clicks on the Campfire button
	 * @return {undefined}
	 */
	 var selectCampfire = function() {
		//Reset the other buttons borders
		resetPowerButtons();

		/**
		 * Place a dotted border around the Campfire button
		 * @type {css}
		 */
		 $(this).addClass('selected-power');
		/**
		 * Set the selected variable to be blue (btn-primary with backbone)
		 * @type {String}
		 */
		 selected = 'btn-danger';
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
	 * Spread heat out
	 * @return {undefined}
	 */
	 var spreadHeat = function() {
		// grab all red elements
		var fire = $('#land > li > .btn-danger');
		// loop through all of the elements on fire and spread heat if necessary
		fire.each(function(el) {
			var previous = $(this).parent().prev().children();
			if(previous.hasClass('btn-default')) {
				previous.removeClass('btn-default');
				previous.addClass('btn-warning');
			}
			var next = $(this).parent().next().children();
			if(next.hasClass('btn-default')) {
				next.removeClass('btn-default');
				next.addClass('btn-warning');
			}
		});

		// grab all orange elements
		var heat = $('#land > li > .btn-warning');
		// loop through all of the heat elements and spread heat if necessary
		heat.each(function(el) {
			var previous = $(this).parent().prev().children();
			if(previous.hasClass('btn-default')) {
				previous.removeClass('btn-default');
				previous.addClass('btn-warning');
			}
			var next = $(this).parent().next().children();
			if(next.hasClass('btn-default')) {
				next.removeClass('btn-default');
				next.addClass('btn-warning');
			}
		});
	};

	/**
	 * Spread the fire
	 * @return {undefined}
	 */
	var spreadFire = function() {
		// grab all red elements
		var fire = $('#land > li > .btn-danger');
		// loop through all of the elements on fire and spread fire if necessary
		fire.each(function(el) {
			var previous = $(this).parent().prev().children();
			if(previous.hasClass('btn-warning')) {
				previous.removeClass('btn-warning');
				previous.addClass('btn-danger');
			}
			var next = $(this).parent().next().children();
			if(next.hasClass('btn-warning')) {
				next.removeClass('btn-warning');
				next.addClass('btn-danger');
			}
		});

	};


	// --------------- Functions
	/**
	 * Remove the border around the power buttons (lake and campfire)
	 * @return {undefined}
	 */
	 var resetPowerButtons = function() {
	 	$('#lake').removeClass('selected-power');
	 	$('#campfire').removeClass('selected-power');
	 };

	/**
	 * Return what we want to be public in the namespace
	 */
	 return {
	 	selectLake: selectLake,
	 	selectCampfire: selectCampfire,
	 	selectLand: selectLand,
	 	spreadHeat: spreadHeat,
	 	spreadFire: spreadFire
	 };

	})();

	$(function() {

	/**
	 * User clicked on the lake button
	 */
	 $('#lake').on('click', Wildfire.selectLake);
	/**
	 * User clicked on the campfire button
	 */
	 $('#campfire').on('click', Wildfire.selectCampfire);
	/**
	 * User clicked on one of the land buttons
	 */
	 $('#land a').on('click', Wildfire.selectLand);

	// spread the heat
	setInterval(Wildfire.spreadHeat, HEAT_SPREAD_RATE);

	/**
	 * Spread the fire
	 */
	setInterval(Wildfire.spreadFire, FIRE_SPREAD_RATE);

});

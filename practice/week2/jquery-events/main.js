// Variable declaration
var clicked = 0;

// Function declaration
var log = function(message) {
	console.log(message);
};

// event handlers
$(document).on('ready', function() {

	$("button").on("click", function() {
		// log("the button was clicked " + clicked++ + " times.");
	});

	$("#my-button").one("click", function() {
		// log("test");
	});

	$("#my-button").click(function() {
		// log(".click event");
	});

	$("a").on('click', function(event) {
		event.preventDefault();
		// log(this);
		/* Act on the event */
	});

});
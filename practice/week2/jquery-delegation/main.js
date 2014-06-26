$(document).on('ready', function() {
	$("button").on("click", function() {
		// console.log("button clicked");
	});

	$(document).on('click', '#button', function(event) {
		console.log($(this).text());
	});

/*	$(document).on('click', function(event) {
		var target = $(event.target);
		console.log(target);
		 Act on the event 
		if(target.text() === "My Button") {
			console.log("We clicked on the button!!!");
		}
	});
*/  
});
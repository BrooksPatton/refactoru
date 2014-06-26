$(document).on('ready', function() {
	$("#button").on("click", function() {
		$("body").append("<p>You clicked the button!</p>");
	});

	$("#title").on("click", function() {
		$("body").append("<h1>You Added a Title</h1>");
	});

	$("#list").on("click", function() {
		$("body").append('<ul><li>1</li><li>2</li><li>3</li></ul>');
	});
});
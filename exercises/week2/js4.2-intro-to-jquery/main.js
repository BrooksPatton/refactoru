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

	$(".paragraph").on("mouseenter", function(element) {
		var id = "#" + element.target.id;
		$(id).addClass('c-pink');
	})

	$(".paragraph").on('mouseleave', function(event) {
		var id = "#" + event.target.id;
		$(id).removeClass('c-pink');
	});

	$(".heading").on("mouseenter", function(event) {
		$(".heading").append("!");
	});

	$("a").on('click', function(event) {
		var id = "#" + event.target.id;
		if(!confirm("Do you want to navigate away from this page?")) {
			$(id).remove();
			return false;
		}
	});
});
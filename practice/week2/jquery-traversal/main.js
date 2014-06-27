$(document).on('ready', function() {

	$("li").on('click', function() {
		$(this).css("color", "red").closest('.container').find(".featured").css("background", "green");
	});
  
});
// Variable declaration


// Callback function declaration
function test(response, newValue) {
	$(this).text(newValue);
}

// Function declaration


// Event handlers
$(document).on('ready', function() {

	$.fn.editable.defaults.mode = 'inline';

	$(".editable").editable({
		type: "text",
		title: "Cool stuff",
		success: test
	});

});
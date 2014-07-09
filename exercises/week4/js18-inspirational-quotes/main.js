$(document).on('ready', function() {
	$('#add-quote').on('click', 'button', Utility.addQuote);
	$('#display-quotes').on('click', 'div button', Quotes.deleteQuote);
});
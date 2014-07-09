$(document).on('ready', function() {
	$('#add-quote').on('click', 'button', Utility.addQuote);
	$('#display-quotes').on('click', 'div button', Quotes.deleteQuote);
	$('#display-quotes').on('click', 'div .upvote', Utility.upvote);
	$('#display-quotes').on('click', 'div .downvote', Utility.downvote);
});
$(document).on('ready', function() {

	$('#add-quote').on('click', 'button', Utility.addQuote);
	$('#display-quotes').on('click', 'div button', Quotes.deleteQuote);
	$('#display-quotes').on('click', 'div .upvote', Utility.upvote);
	$('#display-quotes').on('click', 'div .downvote', Utility.downvote);
	$('#display-quotes').on('click', 'div .author', Utility.showQuotesByAuthor);
	$('.author-page').on('click', 'button', Utility.showAllQuotes);
	$('#random-quote').on('click', 'button', Utility.showRandomQuote);
	$('.add-quote').on('click', '.undelete', Utility.undeleteQuote);

	Quotes.display();
});
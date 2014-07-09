var Utility = (function() {
	var addQuote = function(e) {
		e.preventDefault();
		if(Quotes.validate() === false) {
			alert('you need to fill out the form');
			return false;
		}

		var quote = {};
		quote.quote = $('#add-quote [name="quote"]').val();
		quote.author = $('#add-quote [name="author"]').val();
		quote.rating = 0;
		quote.id = Quotes.id++;
		Quotes.data.push(quote);

		Quotes.display();
	};

	var upvote = function() {
		Quotes.incrementRating($(this));
		Quotes.display();
	};

	var downvote = function() {
		Quotes.decrementRating($(this));
		Quotes.display();
	};

	var showQuotesByAuthor = function() {
		$('.container').addClass('hidden');
		$('.author-page').removeClass('hidden');
		var authorsQuotes = Quotes.getQuotesByAuthor($(this));
		$('.author-quotes').append('<h2>' + $(this).text() + '</h2>');
		authorsQuotes.forEach(function(item) {
			$('.author-quotes').append('<p>' + item.quote + '</p>');
		});
		console.log($(this).text());
	};

	var showAllQuotes = function() {
		$('.author-quotes').empty();
		$('.author-page').addClass('hidden');
		$('.container').removeClass('hidden');
	};

	var showRandomQuote = function() {
		var quote = Quotes.getRandomQuote();
		
	};

	return {
		addQuote: addQuote,
		upvote: upvote,
		downvote: downvote,
		showQuotesByAuthor: showQuotesByAuthor,
		showAllQuotes: showAllQuotes,
		showRandomQuote: showRandomQuote
	};
})();
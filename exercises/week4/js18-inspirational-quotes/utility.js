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

	return {
		addQuote: addQuote,
		upvote: upvote,
		downvote: downvote
	};
})();
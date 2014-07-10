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
		$.colorbox({html:quote});
	};

	var undeleteQuote = function() {
		Quotes.data.push(Quotes.recycleBin);
		$('.undelete').remove();
		Quotes.display();
	};

	var saveToLocalStorage = function() {
		var stringified = JSON.stringify(Quotes.data);
		localStorage.setItem('quotes', stringified);
	}

	var loadFromLocalStorage = function() {
		var stringified = localStorage.getItem('quotes');
		var objectified = JSON.parse(stringified);
		Quotes.data = objectified;
		Quotes.display();
	}

	return {
		addQuote: addQuote,
		upvote: upvote,
		downvote: downvote,
		showQuotesByAuthor: showQuotesByAuthor,
		showAllQuotes: showAllQuotes,
		showRandomQuote: showRandomQuote,
		undeleteQuote: undeleteQuote,
		save: saveToLocalStorage,
		load: loadFromLocalStorage
	};
})();
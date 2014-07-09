var Quotes = (function() {
	var quotes = [];
	var id = 0;
	var recycleBin = {};

	var display = function() {
		$('#display-quotes').empty();
		quotes.forEach(function(quote) {
			$('#display-quotes').append(generateQuoteHtml(quote));
		});
	};

	var generateQuoteHtml = function(quote) {
		var html = $('<div data-id="' + quote.id + '" class="generatedQuote">');
		html.append('<div>' + quote.quote + '</div>');
		html.append('<div class="author">' + quote.author + '</div>');
		html.append('<div class="inline-block vote"><span class="upvote"><</span> <span class="downvote">></span></div></div class="inline-block"><div class="inline-block">' + quote.rating + '</div><button>Delete</button></div>')
		return html;
	};

	var deleteQuote = function() {
		var num = $(this).closest('div').attr('data-id');
		recycleBin = _.findWhere(quotes, {id: Number(num)});
		var newQuotes = _.reject(quotes, function(item) {
			return item === recycleBin;
		});
		Quotes.data = newQuotes;
		$(this).closest('div').remove();
	};

	var validateform = function () {
		if($('#add-quote [name="quote"]').val() || $('#add-quote [name="author"]').val()) {
			return true;
		}
		return false;
	};

	var incrementRating = function(item) {
		var id = item.closest('.generatedQuote').attr('data-id');
		var quote = _.findWhere(Quotes.data, {id: Number(id)});
		var index = _.indexOf(Quotes.data, quote);
		Quotes.data[index].rating++;
	};

	var decrementRating = function(item) {
		var id = item.closest('.generatedQuote').attr('data-id');
		var quote = _.findWhere(Quotes.data, {id: Number(id)});
		var index = _.indexOf(Quotes.data, quote);
		Quotes.data[index].rating--;
	};

	return {
		data: quotes,
		display: display,
		id: id,
		deleteQuote: deleteQuote,
		validate: validateform,
		incrementRating: incrementRating,
		decrementRating: decrementRating
	};
})();
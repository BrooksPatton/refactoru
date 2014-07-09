var Quotes = (function() {
	var quotes = [];
	var id = 0;

	var display = function() {
		$('#display-quotes').empty();
		quotes.forEach(function(quote) {
			$('#display-quotes').append(generateQuoteHtml(quote));
		});
	};

	var generateQuoteHtml = function(quote) {
		var html = $('<div data-id="' + quote.id + '">');
		html.append('<div>' + quote.quote + '</div>');
		html.append('<div class="author">' + quote.author + '</div>');
		html.append('<div class="inline-block vote">< ></div></div class="inline-block"><button>Delete</button></div>')
		return html;
	};

	var deleteQuote = function() {
		var num = $(this).closest('div').attr('data-id');
		var object = _.findWhere(quotes, {id: Number(num)});
		console.log(object);
	}

	return {
		data: quotes,
		display: display,
		id: id,
		deleteQuote: deleteQuote
	};
})();
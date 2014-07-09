var Utility = (function() {
	var addQuote = function(e) {
		e.preventDefault();
		var quote = {};
		quote.quote = $('#add-quote [name="quote"]').val();
		quote.author = $('#add-quote [name="author"]').val();
		quote.rating = 0;
		quote.id = Quotes.id++;
		Quotes.data.push(quote);

		Quotes.display();
	}
	return {
		addQuote: addQuote
	};
})();
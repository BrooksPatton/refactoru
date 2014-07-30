$(function() {
	$('#random').on('click', function(e) {
		e.preventDefault();
		getNumbers(0);
	});

	$('#submit-new-number').on('click', function(e) {
		e.preventDefault();
		addNumberToTotal( $('#add-number').val() );
	})
});

var getNumbers = function(count) {
	$.get('/numbers', function(number) {
			$('#numbers').html(number.map(function(n) {
				return $('<li>').text(n);
			}));
			console.log(count);
			getNumbers(count + 1);
		});
};

var addNumberToTotal = function(num) {
	$.post('/addNumber', {number: num}, function(total) {
		$('#total').text(total);
	});
};
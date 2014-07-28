$(document).on('ready', function() {
	$('button').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			url: '/countries',
			type: 'post',
			success: function(result) {
				var el = $('<ul>');
				result.forEach(function(country) {
					el.append('<li><b>Name:</b> ' + country.name);
				});
				$('body').append(el);
			}
		});
	});

	$('#search').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			url: '/search',
			type: 'post',
			data: {search: $('#searchCountry').val()}
		})
	})
});
$(document).on('ready', function() {
	$('button').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			url: '/countries',
			type: 'post'
		})
	})
})
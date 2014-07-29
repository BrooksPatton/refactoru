$(document).on('ready', function() {
	$('.delete-applicant').on('click', function() {
		var userId = $(this).data('id');
		$.ajax({
			type: 'post',
			url: '/delete',
			data: {userId: userId},
			success: function() {
				console.log('deleted');
			}
		});
	});
});
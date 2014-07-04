$(document).on('ready', function() {
	$('.content').append(calendar.generateWeek);
	$(document).on('scroll', calendar.scrollToBottom);
});
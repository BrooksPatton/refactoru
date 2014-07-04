$(document).on('ready', function() {
	$('.content').append(calendar.generateWeek);
	$(document).on('scroll', calendar.scrollToBottom);
	$('.content').on('click', '.addEntry', calendar.showAddEventForm);
	$('.content').on('click', '.submitNewEvent', calendar.submitNewEvent);
});
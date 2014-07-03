var loadCalendarData = function loadCalendarData() {
	return testData;
};

var generateWeek = function generateWeek( data, startingDay ) {
	var day = $( '<div class="day">');
	var newAppointmentButton = $('<button name="new">New</button>');
	day.attr('data-day', startingDay.toDateString());
	day.append(newAppointmentButton);
	return day;
};
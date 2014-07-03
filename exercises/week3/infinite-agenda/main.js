$(document).on('ready', function() {
  var calendarData = loadCalendarData();
  var firstDayOfWeek = new Date();
  var week = generateWeek( calendarData, firstDayOfWeek );
  $('body').append(week);
});
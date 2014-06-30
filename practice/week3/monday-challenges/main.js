function stopwatch(hours, minutes, seconds) {
	hours = hours || 0;
	minutes = minutes || 0;
	seconds = seconds || 0;

	console.log(
		'hours: ' + hours + '\n' +
		'minutes: ' + minutes + '\n' +
		'seconds: ' + seconds + '\n');
}

function href(element, url) {
	if(!url) {
		return $(element).attr('href');
	}
	$(element).attr('href', url);
}
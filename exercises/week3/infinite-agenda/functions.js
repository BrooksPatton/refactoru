var calendar = (function namespace() {
	var date = new Date();

	var generateWeek = function generateWeek() {
		var week = $('<div class="calendar">');
		var currentDate = date.getDate();
		var sevenDaysFromNow = currentDate + 7;
		for(var i = currentDate; i < sevenDaysFromNow; i++) {
			date.setDate(i);
			var day = $('<div class="day">');
			day.append('<h2>' + date.toDateString() + '</h2>');
			week.append(day);
		}
		date.setDate(i);
		return week;
	};

	var scrollToBottom = function scrollToBottom() {
		var bottom = $(document).scrollTop() + window.innerHeight;
		if(bottom === $(document).height())
			$('.content').append(generateWeek());
	}

	return {
		generateWeek: generateWeek,
		scrollToBottom: scrollToBottom
	};
})();

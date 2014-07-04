var calendar = (function namespace() {
	var date = new Date();
	var data = [];

	var loadData = function loadData() {
		data = testData;
	};

	var generateWeek = function generateWeek() {
		var week = $('<div class="calendar">');
		var currentDate = date.getDate();
		var sevenDaysFromNow = currentDate + 7;
		for(var i = currentDate; i < sevenDaysFromNow; i++) {
			date.setDate(i);
			var currentDay = date.toDateString();
			var day = $('<div class="day">');
			day.append('<h2>' + currentDay + '</h2>');
			var userData = _.where(data, {date: currentDay});
			if(userData) {
				userData.forEach(function(item) {
					day.append('<p>' + item.description + '</p>');
					day.append('<p>' + item.time + '</p>');
					day.append('<p>' + item.location + '</p>');
			});
			}
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

	loadData();

	return {
		generateWeek: generateWeek,
		scrollToBottom: scrollToBottom
	};
})();

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
					day.append('<div class="event"><p>' + item.description + '</p>');
					day.append('<p>' + item.time + '</p>');
					day.append('<p>' + item.location + '</p></div>');
			});
			}
			day.append('<div class=buttons><button class="addEntry">New Event</button></div>');
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

	var showAddEventForm = function showAddEventForm() {
		var form = $('<form class="addEvent">');
		form.append('<div><input type="text" placeholder="description" name="description"></div>');
		form.append('<div><input type="text" placeholder="time" name="time"></div>');
		form.append('<div><input type="text" placeholder="location" name="location"></div>');
		form.append('<div><button class="submitNewEvent">Submit</button></div>');
		$(this).after(form);
		$(this).attr('disabled', 'disabled');
	};

	var submitNewEvent = function submitNewEvent(e) {
		e.preventDefault();
		var newEvent = {};
		newEvent.description = $(this).closest('form').find('input[name=description]').val();
		newEvent.time = $(this).closest('form').find('input[name=time]').val();
		newEvent.location = $(this).closest('form').find('input[name=location]').val();
		data.push(newEvent);
		$(this).closest('.day').append('<div class="event"><p>' + newEvent.description + '</p>');
		$(this).closest('.day').append('<div class="event"><p>' + newEvent.time + '</p>');
		$(this).closest('.day').append('<div class="event"><p>' + newEvent.location + '</p>');
		$(this).closest('.day').find('.addEntry').removeAttr('disabled');
		$(this).closest('.day').find('.addEvent').remove();
	}

	loadData();

	return {
		generateWeek: generateWeek,
		scrollToBottom: scrollToBottom,
		showAddEventForm: showAddEventForm,
		submitNewEvent: submitNewEvent,
		data: data
	};
})();

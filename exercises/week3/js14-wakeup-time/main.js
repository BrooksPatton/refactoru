/*----Global Variables------------------------------------------------------------*/
/*----Callback Functions----------------------------------------------------------*/
var runClock = function runClock (event) {
	// Clear the clock display
	$('.clock-text').remove();
	// Clear the am pm indicator
	$('.label-indicator').remove();
	var date = new Date();
	// get the current time
	var hours24 = date.getHours();
	var minutes = date.getMinutes();
	// convert the time to 12-hour time format
	if(hours24 > 12) {
		var hours12 = hours24 - 12;
		var pm = true;
	}
	// Set am or pm
	if(pm) {
		$('.labels-pm').append( labelIndicator() );
	}
	else {
		$('.labels-am').append( labelIndicator() );
	}

	// Set the clock time
	$('.screen').append( clockText( {hours:hours12, minutes: minutes} ) );
}

/*----Function Declarations-------------------------------------------------------*/
var createClock = function createClock() {
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var labels = $('<div class="labels"><div class="labels-am">AM</div><div class="labels-pm">PM</div><div class="labels-auto">Auto</div></div>');
	var screen = $('<div class="screen"></div>');
	var radio = $('<div class="radio"></div>');
	var frequenciesAm = $('<div class="frequencies">AM<span class="tab"></span>53 60 70 90 110 140 170</div>');
	var frequenciesPm = $('<div class="frequencies">PM<span class="tab"></span>88 92 96 102 106 108</div>');
	innerShell.appendTo(outerShell);
	labels.appendTo(innerShell);
	screen.appendTo(innerShell);
	frequenciesAm.appendTo(radio);
	frequenciesPm.appendTo(radio);
	radio.appendTo(outerShell);
	return outerShell;
}

var labelIndicator = function labelIndicator() {
	return $('<div class="label-indicator"></div>');
}

var clockText = function clockText(time) {
	return $('<span class="clock-text">' + time.hours + ':' + time.minutes + '</span>');
}

$(document).on('ready', function() {
	$('.container').append( createClock() );
	// Initialize clock
	runClock();
	setInterval(runClock, 60000);
});
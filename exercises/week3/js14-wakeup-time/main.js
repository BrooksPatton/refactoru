/*----Global Variables------------------------------------------------------------*/
/*----Callback Functions----------------------------------------------------------*/
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
	$('.labels-auto').append( labelIndicator() );
	$('.screen').append( clockText( {hours:10, minutes: 32} ) );
});
// Variable declaration


// Callback function declaration


// Function declaration
var collectMetrics = function(parameter) {
	// Variable declaration
	var totalPage = $(document).height();
	var percentageViewed = 0;
	var totalDistanceScrolled = 0;

	// Callback function declaration


	// Function declaration
	var log = function(message) {
		console.log(message);
	};

	var showMetrics = function() {
		var message = "Metrics: \n\n";
		message += "Site viewed: " + percentageViewed;
		alert(message);
	};
	
	

	// Event handlers
	$("#metrics").on('click', function(event) {
		event.preventDefault();
		showMetrics();
	});

	$(document).on('scroll', function(event) {
		var percent = event.currentTarget.activeElement.scrollTop / totalPage * 100;
		if(percent > percentageViewed) {
			percentageViewed = percent;
		}
	});

	$(window).on("resize", function() {
		totalPage = $(window).height();
	})

};


// Event handlers
$(document).on('ready', function() {
  
collectMetrics();

});
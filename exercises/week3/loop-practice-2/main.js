// Variable declaration
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// Callback function declaration


// Function declaration
var loop1 = function loop1(arr) {
	for(var i = 0; i < arr.length - 1; i++)
		console.log( arr[i] );
};

var loop2 = function loop2(arr) {
	for(var i = 0; i < arr.length; i += 2)
		console.log( arr[i] );
};

var loop3 = function loop3(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log( arr[i] );
	};
};

var loop4 = function loop4(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(i === 0 || i === arr.length - 1) {
			console.log( arr[i] );
		}
		else {
			for(var b = 0; b < 2; b++)
				console.log( arr[i] );
		}
	}
};

// Event handlers
$(document).on('ready', function() {
  
});

// Main Logic

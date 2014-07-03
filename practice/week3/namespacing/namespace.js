// Namespacing
// var name = 'RefactorU';

// var getData = function() {
// 	return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
// };

//namespacing
// var App = {
// 	name: 'RefactorU',

// 	getData: function() {
// 		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
// 	}
// };

// Privacy
// Revealing module pattern
// Immediately Invoked Function Exression
var App = (function() {
	var name = 'RefactorU';

	var getData = function() {
		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
	};

	var welcome = function welcome() {
		console.log('Welcome, ' + name);
	};

	return {
		getData: getData,
		welcome: welcome
	};
})();
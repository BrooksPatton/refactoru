var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

var problem1 = function problem1(arr) {
	arr.forEach(function(item) {
		console.log(item.age);
	});
};

var problem2 = function problem2(arr) {
	arr.forEach(function(item) {
		console.log(item.name + ', ' + item.city);
	});
};






$(document).on('ready', function() {
  
});
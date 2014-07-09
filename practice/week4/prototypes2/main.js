var up = 38;
var right = 39;
var down = 40;
var left = 37;
var truckSpeed = 5;
var startingFuel = 100;

var Truck = function(color) {
	
	if(color)
		this.color = color;
	this.iconType = 'truck';
	this.fuelLevel = startingFuel;
	this.x = 0;
	this.y = 0;

};
Truck.prototype.color = 'red';
Truck.prototype.create = function() {

	this.el = $('<i>')
		.addClass('icon-' + this.iconType)
		.css({
			color: this.color,
			position: 'absolute',
			top: this.y,
			left: this.x
		});
		return this.el;

};
Truck.prototype.updateRender = function() {
	this.el.css({
		top: this.y,
		left: this.x
	});
};
Truck.prototype.drive = function(keyCode) {
	if(this.fuelLevel === 0) {
		console.log('out of fuel');
		return false;
	}

	if(keyCode === up) {
		this.y -= truckSpeed;
		this.updateRender();
		this.fuelLevel -= 1;
	}
	else if(keyCode === right) {
		this.x += truckSpeed;
		this.updateRender();
		this.fuelLevel -= 1;
	}
	else if(keyCode === down) {
		this.y += truckSpeed;
		this.updateRender();
		this.fuelLevel -= 1;
	}
	else if(keyCode === left) {
		this.x -= truckSpeed;
		this.updateRender();
		this.fuelLevel -= 1;
	}
};

var Station = function() {
	this.storedFuel = 1000;
};
Station.prototype.checkTrucksFuel = function(truck) {
	return truck.fuelLevel;
};
Station.prototype.fuelTruck = function(truck) {
	var fuelTruckNeeds = 10 - truck.fuelLevel;
	if(this.storedFuel >= fuelTruckNeeds) {
		truck.fuelLevel += fuelTruckNeeds;
		this.storedFuel -= fuelTruckNeeds;
	}
	else if(this.storedFuel > 0) {
		truck.fuelLevel += this.storedFuel;
		this.storedFuel = 0;
		this.el.css('color', 'red');
	}
	else {
		console.log('no fuel in stores here. Try at another station');
		this.el.css('color', 'red');
	}
};
Station.prototype.addFuelToStation = function(fuelAmount) {
	this.storedFuel += fuelAmount;
};
Station.prototype.create = function() {
	this.el = $('<i>')
		.addClass('icon-fuel');
	return this.el;
};

var Ambulance = function() {

	this.iconType = 'ambulance';

};
Ambulance.prototype = new Truck('blue');
Ambulance.prototype.constructor = Ambulance;

var burritoTruck = new Truck();
$('body').append(burritoTruck.create());

// var tofurkyTruck = new Truck();
// $('body').append(tofurkyTruck.create());

// var ambulance = new Ambulance();
// $('body').append(ambulance.create());

var station = new Station();
$('body').append(station.create());

$(document).on('ready', function() {
	$(document).on('keydown', function(e) {
		
		burritoTruck.drive(e.keyCode);

	});
});
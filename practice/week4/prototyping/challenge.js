var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

var Athlete = function Athlete(fatigue, height, weight, name, age) {
	Person.call(this, name, age);
	this.fatigue = fatigue;
	this.height = height;
	this.weight = weight;
	this.ready = false;
	this.warmUp = function() {
		console.log("Ok, I'm warmed up now");
		this.ready = true;
	};
	this.start = function() {
		if(this.ready) {
			console.log('Okay, here we go!');
		}
		else {
			console.log('I\'m not ready yet.');
		}
	};
};

var RollerBlader = function RollerBlader(fatigue, height, weight, helmet, skateType, name, age) {
	Athlete.call(this, fatigue, height, weight, name, age);
	this.isWearingHelmet = helmet;
	this.skateType = skateType;
};

RollerBlader.prototype = new Athlete();
RollerBlader.prototype.constructor = RollerBlader;

var Swimmer = function Swimmer(fatigue, height, weight, breath, name, age) {
	Athlete.call(this, fatigue, height, weight, name, age);
	this.breath = breath;
	this.warmUp = function() {
		console.log('Yay, its swim time!');
		this.ready = true;
	};
};

Swimmer.prototype = new Athlete();
Swimmer.prototype.constructor = Swimmer;
/**
 * Immediately Invoking Function Expression (revealing module pattern)
 * @return {object} namespace
 */
var MoonGame = (function() {
	var NUMBER_OF_BIRDS = 20;
	var MAX_TOP = 60;
	var MAX_LEFT = 90;
	var FLOCK_RISE_RATE = 5;


	/**
	 * Bird constructor
	 */
	var Bird = function() {
	};
	Bird.prototype.create = function() {
		this.el = $('<i class="icon-twitter-bird bird">');
		this.el.css({
			top: Math.random() * MAX_TOP + '%',
			left: Math.random() * MAX_LEFT + '%',
			color: '#' + (Math.random().toString(16) + '000000').slice(2, 8)
		});
		return this.el;
	};

	var Penguin = function() {
	};
	Penguin.prototype.create = function() {
		this.el = $('<i class="penguin icon-plancast">');
		return this.el;
	};

	var Flock = function(penguin) {
		this.penguin = penguin;
		this.birds = [];
	};
	Flock.prototype.create = function() {
		var newEl = $('<div class="flock">');
		newEl.append(this.penguin.create());
		newEl.css({bottom: this.birds.length * FLOCK_RISE_RATE});

		for(var i = 0; i < this.birds.length; i++) {
			newEl.append(this.birds[i].el);
		}

		if(this.el) {
			this.el.replaceWith(newEl);
		}

		this.el = newEl;

		return newEl;
	};
	Flock.prototype.addBirdClickHandler = function(bird) {
		var self = this;
		bird.el.on('click', function() {
			self.birds.push(bird);
			self.create();
		});
	};

	/**
	 * Array of free flying birds
	 * @type {Array}
	 */
	var birds = [];
	var flock = null;

	var init = function() {

		var penguin = new Penguin();
		flock = new Flock(penguin);

		for(var i = 0; i < NUMBER_OF_BIRDS; i++) {
			var bird = new Bird();
			var birdEl = bird.create();
			$('.sky').append(birdEl);
			birds.push(bird);
			flock.addBirdClickHandler(bird);
		}


		$('.sky').append(flock.create());

	};

	/**
	 * Return an object literal with the properties and methods that we want to reveal. Everything else is private.
	 */
	return {
		init: init,
		birds: birds
	}

})();

$(document).on('ready', function() {

	MoonGame.init();

});
/**
 * Animal constructor to spin off an animal. meant to be used in prototypes of specific types of animals.
 */
var Animal = function Animal(name) {
	this.name = name;
	this.move = function() {
		console.log('Moved 5ft forward');
	};
};

/**
 * Constructor to create snakes.
 */
var Snake = function Snake(name) {
	this.talk = function() {
		console.log('hssssss');
	};

	/**
	 * Invoke the constructor of the superclass with a context of this to set the name.
	 *
	 * Step two in the prototyping method.
	 *
	 * Call is a builting method that allows you to invoke a function with a custom context (value of this)
	 *
	 * This is needed to pass values from the subclass to the superclass in the constructor.
	 */
	Animal.call(this, name);
};

/**
 * A snake is indeed a type of animal and should be able to do everything that an animal does
 * @type {Constructor}
 *
 * Part 1 of the prototyping method.
 */
Snake.prototype = new Animal();

/**
 * Set the constructor property
 * @type {constructor}
 *
 * Step 3 in the prototyping method
 */
Snake.prototype.constructor = Snake;

/**
 * Spinning off an instance of a snake.
 * @type {Constructor}
 */
var snake = new Snake('Kaa');

/**
 * We can now run the move method on snake, even though it is defined in the animal constructor.
 */
snake.move();


$(document).on('ready', function() {
  
});
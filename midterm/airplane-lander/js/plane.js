Lander.Plane = function(y) {
	this.y = y || Lander.getRandomHeightInSky();
	this.id = Lander.planeId++;
};

Lander.Plane.prototype.create = function() {
	this.el = $('<i class="plane icon-flight-1">');
	this.el.css({
		top: this.y,
		position: 'absolute'
	});
	this.el.addClass( this.randomSize() );
	this.el.attr('data-id', this.id);
	this.collisionBox = this.createCollisionBox();
	return this.el;
};

Lander.Plane.prototype.render = function() {
	$('.sky').append(this.el);
};

Lander.Plane.prototype.randomSize = function() {
	var possibleSizes = ['small', 'medium', 'large'];
	return 'icon-' + possibleSizes[ _.random(0, possibleSizes.length -1) ];
};

Lander.Plane.prototype.getStartingXCoordinate = function() {
	return -100;
};

Lander.Plane.prototype.fly = function() {
	var position = this.el.position();
	this.x = position.left;
	if(this.x >= Lander.screenWidth - 75 && this.direction === 'right') {
		this.el.css('-webkit-transform', 'rotate(180deg)');
		this.direction = 'left';
	}
	else if(this.x <= 50 && this.direction === 'left') {
		this.el.css('-webkit-transform', 'rotate(0)');
		this.direction = 'right';
	}
	( this.direction === 'right' ) ? this.el.css('left', position.left + 1) : this.el.css('left', position.left - 1);
	this.render();
	this.testCollision();
};

Lander.Plane.prototype.launch = function() {
	setInterval(this.fly.bind(this), 10);
	this.direction = 'right';
	this.createCollisionBox();
};

Lander.Plane.prototype.createCollisionBox = function() {
	this.collisionBox = new SAT.Box(new SAT.Vector(0, this.y), this.el.width(), this.el.height()).toPolygon();
};

Lander.Plane.prototype.testCollision = function() {
	var self = this;
	var listOfOtherPlanes = _.reject(Lander.planeList, function(item) {
		return item.id === self.id;
	});
	listOfOtherPlanes.forEach(function(item) {
		if( SAT.testPolygonPolygon(self.collisionBox, item.collisionBox) ) {
			console.log('collision!');
		}
	});
};
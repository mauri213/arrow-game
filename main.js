// Canvas
var canvas = document.getElementById('game');
canvas.height = 400;
canvas.width = 600;

var context = canvas.getContext('2d');

// Assets
var backgroundImage = new Image();
backgroundImage.src = './assets/bg.png';

var balloonImage = new Image();
balloonImage.src = './assets/balloon.png';

var lineImage = new Image();
lineImage.src = './assets/line.png';

var arrowImage = new Image();
arrowImage.src = './assets/arrow.png';

var gravity = 0.1;

// Objects
var Entity = function (view, rigidBody) {
    this.view = view;
    this.rigidBody = rigidBody;
};

var View = function (image, offsetX, offsetY) {
    this.image = image;
    this.offsetX = offsetX || 0;
    this.offsetY = offsetY || 0;
};

var physics = function (rigidBody) {
    rigidBody.velocityY += gravity;
    if (rigidBody.y + rigidBody.radius < canvas.height - 10) {
        rigidBody.y += rigidBody.velocityY;
        rigidBody.x += rigidBody.velocityX;
	    rigidBody.rotation = Math.atan2(rigidBody.velocityY, rigidBody.velocityX);
    }
};

var RigidBody = function (x, y, radius, velocity, rotation) {
    var radAngle = rotation;
    velocity = velocity || 0;
    this.x = x;
    this.y = y;
    this.velocityX = Math.cos(radAngle) * velocity;
    this.velocityY = -Math.sin(radAngle) * velocity;
    this.radius = radius || 0;
    this.rotation = rotation || 0;
};

var render = function (x, y, rotation, image, offsetX, offsetY) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.drawImage(image, offsetX || 0, offsetY || 0);
    context.restore();
};

// Initialization
var archer = new Entity(new View(lineImage), new RigidBody(20, canvas.height - 25));
var balloons = [];
var arrows = [];

for (var i = 0; i < 10; i++) {
	x = Math.floor(Math.random() * (canvas.width - 100 + 1) + 100);
	y = Math.floor(Math.random() * (canvas.height - 100));
	balloons.push(new Entity(new View(balloonImage, -14, -18), new RigidBody(x, y, 15)))
}

var loop = function () {
    requestAnimationFrame(function () {
    	var changeX;
    	var changeY;
    	var balloon;
    	var arrow;
        context.clearRect(0, 0, canvas.width, canvas.height);
        render(0, 0, 0, backgroundImage);
      	render(archer.rigidBody.x, archer.rigidBody.y, archer.rigidBody.rotation, archer.view.image, archer.view.offsetX, archer.view.offsetY);
      	for (var i = 0; i < balloons.length; i++) {
      		balloon = balloons[i];
            render(balloon.rigidBody.x, balloon.rigidBody.y, balloon.rigidBody.rotation, balloon.view.image, balloon.view.offsetX, balloon.view.offsetY);
      	}
        for (var i = 0; i < balloons.length; i++) {
        	balloon = balloons[i];
        	for (var j = 0; j < arrows.length; j++) {
        		arrow = arrows[j];
                changeX = balloon.rigidBody.x - arrow.rigidBody.x;
                changeY = balloon.rigidBody.y - arrow.rigidBody.y;
                dist = Math.sqrt(Math.pow(changeX, 2) + Math.pow(changeY, 2));
                if (dist <= balloon.rigidBody.radius + arrow.rigidBody.radius) {
                	balloons.splice(balloons.indexOf(balloon), 1);
                }
        	}	
        }
        for (var k = 0; k < arrows.length; k++) {
        	arrow = arrows[k];
            physics(arrow.rigidBody);
            render(arrow.rigidBody.x, arrow.rigidBody.y, arrow.rigidBody.rotation, arrow.view.image, arrow.view.offsetX, arrow.view.offsetY);
        }
        loop();
    });
};

var time, rotation;

canvas.addEventListener('mousemove', function () {
    var rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.left;
    var y = event.clientY - rect.bottom;
	rotation = Math.atan(y / x);
	archer.rigidBody.rotation = rotation;
});

canvas.addEventListener('mousedown', function () {
	time = Date.now();
});

canvas.addEventListener('mouseup', function () {
	var velocity = (Date.now() - time) / 100;
	if (velocity > 15) {
		velocity = 15;
	}
    var arrow = new Entity(new View(arrowImage, -50, -7.5), new RigidBody(20, canvas.height - 25, 5, velocity, -rotation));
    arrows.push(arrow);
});

loop();
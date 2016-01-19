var lineImage = new Image();
lineImage.src = './assets/line.png';

var archer = new Entity(new View(lineImage), new RigidBody(20, canvas.height - 25));

var player = {
    update: function () { 
        render(
            archer.rigidBody.x,
            archer.rigidBody.y,
            archer.view.image,
            archer.rigidBody.rotation,
            archer.view.offsetX,
            archer.view.offsetY
        );
    }
};

var time;
var rotation;

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
    arrows.shoot(velocity, rotation);
});
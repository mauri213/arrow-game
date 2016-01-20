var backgroundImage = new Image();
backgroundImage.src = './assets/bg.png';

physics.gravity = 0.1;
arrows.shootCount = 3;
arrows.spread = 0.2;

for (var i = 0; i < 1000; i++) {
    balloons.create();
}

var update = function () {
    render(0, 0, backgroundImage);
    player.update();
    arrows.update();
    balloons.update();
    collider.update();
};

loop(update);
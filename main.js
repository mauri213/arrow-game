var backgroundImage = new Image();
backgroundImage.src = './assets/bg.png';

physics.gravity = 0.01;
arrows.shootCount = 6;

for (var i = 0; i < 1000; i++) {
    balloons.create();
}

loop(function () {
    render(0, 0, backgroundImage);
    player.update();
    arrows.update();
    balloons.update();
    collider.update();
});
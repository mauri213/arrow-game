var backgroundImage = new Image();
backgroundImage.src = './assets/bg.png';

var gravity = 0.1;

for (var i = 0; i < 10; i++) {
    balloons.create();
}

loop(function () {
    render(0, 0, backgroundImage);
    player.update();
    arrows.update();
    balloons.update();
    collider.update();
});
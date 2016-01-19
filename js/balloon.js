var balloonImage = new Image();
balloonImage.src = './assets/balloon.png';

var currentBalloons = [];

var balloons = {
    update: function () {
        var balloon;
        for (var i = 0; i < currentBalloons.length; i++) {
            balloon = currentBalloons[i];
            render(
                balloon.rigidBody.x,
                balloon.rigidBody.y,
                balloon.view.image,
                balloon.rigidBody.rotation,
                balloon.view.offsetX,
                balloon.view.offsetY
            );
        }
    },
    create: function () {
        var x = Math.floor(Math.random() * (canvas.width - 100 + 1) + 100);
        var y = Math.floor(Math.random() * (canvas.height - 100));
        currentBalloons.push(new Entity(new View(balloonImage, -14, -18), new RigidBody(x, y, 15)));
    }
}
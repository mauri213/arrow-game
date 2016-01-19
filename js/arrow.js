var arrowImage = new Image();
arrowImage.src = './assets/arrow.png';

var currentArrows = [];

var arrows = {

    shootCount: 1,
    
    spread: 0.1,
    
    shoot: function (velocity, rotation) {
        var arrow, modifier;
        for (var i = 0; i < this.shootCount; i++) {
            modifier = this.spread * (i - (this.shootCount / 2));
            arrow = new Entity(
                new View(arrowImage, -50, -7.5),
                new RigidBody(20, canvas.height - 25, 5, velocity, -rotation + modifier)
            );
            currentArrows.push(arrow);
        }
    },

    update: function () {
        var arrow;
        for (var i = 0; i < currentArrows.length; i++) {
            arrow = currentArrows[i];
            physics.apply(arrow.rigidBody);
            render(
                arrow.rigidBody.x,
                arrow.rigidBody.y,
                arrow.view.image,
                arrow.rigidBody.rotation,
                arrow.view.offsetX,
                arrow.view.offsetY
            );
        }
    }
    
};
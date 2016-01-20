// Create a new image with the arrow.png file.
var arrowImage = new Image();
arrowImage.src = './assets/arrow.png';

// Create an array to hold all of our arrows.
var currentArrows = [];

// Create an object to organize our arrow-related values and functions.
var arrows = {

    // This property holds the number of arrows we fire with each shoot() call.
    shootCount: 1,

    // This property holds the amount of distance between each arrow when
    // firing multiple arrows.
    spread: 0.1,
    
    // This function will create a new arrow (or arrows) with a given velocity
    // and rotation.
    shoot: function (velocity, rotation) {
        var arrow;
        var gaps = this.shootCount - 1;

        // Determine the starting angle by subtracting half of the total spread
        // (spread * gaps) from the angle of the arrow.
        var angle = -rotation - this.spread * gaps / 2;

        // While gaps + 1 (the shootCount) is greater than 0
        while (gaps + 1) {
            // Create a new arrow around the bottom left corner of the canvas
            // with the velocity and current angle.
            arrow = new Entity(
                new View(arrowImage, -50, -7.5),
                new RigidBody(20, canvas.height - 25, 5, velocity, angle)
            );

            // Add that arrow to the currentArrows array.
            currentArrows.push(arrow);

            // Add the spread (space between arrows) to the current angle.
            angle += this.spread;

            // Decrease the number of gaps by 1.
            gaps--;
        }
    },
    // This function will update the arrows on the canvas.
    update: function () {
        var arrow;

        // Iterate through the currentArrows array using a for-loop.
        for (var i = 0; i < currentArrows.length; i++) {
            arrow = currentArrows[i];

            // Apply physics to the arrow's RigidBody.
            physics.apply(arrow.rigidBody);

            // Draw the arrow onto the canvas with the render() function by
            // passing its X and Y coordinates, image, rotation and offsets.
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
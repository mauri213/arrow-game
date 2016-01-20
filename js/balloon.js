// Create a new image with the arrow.png file.
var balloonImage = new Image();
balloonImage.src = './assets/balloon.png';

// Create an array to hold all of our balloons.
var currentBalloons = [];

// Create an object to organize our balloon-related values and functions.
var balloons = {

    // This function will update the balloons on the canvas.
    update: function () {
        var balloon;

        // Iterate through the currentBalloons array using a for-loop.
        for (var i = 0; i < currentBalloons.length; i++) {
            balloon = currentBalloons[i];

            // Draw the balloon onto the canvas with the render() function by
            // passing its X and Y coordinates, image, rotation and offsets.
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

    // This function will create a new balloon with given x and y coordinates.
    create: function (x, y) {
        // If no coordinates were given, random x and y values are assigned.
        x = x || Math.floor(Math.random() * (canvas.width - 100 + 1) + 100);
        y = y || Math.floor(Math.random() * (canvas.height - 100));

        // Add a new balloon entity to the currentBalloons array.
        currentBalloons.push(
            new Entity(
                new View(balloonImage, -14, -18),
                new RigidBody(x, y, 15)
            )
        );
    }

};
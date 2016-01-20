// Create an object to organize values and functions related to the game's
// physics.
var physics = {

    // This property contains the gravity constant. This is how many pixels
    // will be added per second to the arrow's downward velocity.
    gravity: 0.1,

    // This function will take a RigidBody and do three things to it:
    //     - apply gravity to it
    //     - add its velocities to its position to give it motion
    //     - adjust the rotation so it appears to point towards its path
    apply: function (rigidBody) {
        // If the RigidBody is above the bottom of the canvas:
        if (rigidBody.y + rigidBody.radius < canvas.height - 10) {
            // Apply gravity to the RigidBody's vertical velocity.
            rigidBody.velocityY += this.gravity;

            // Add the X and Y velocities to the X and Y coordinates.
            rigidBody.y += rigidBody.velocityY;
            rigidBody.x += rigidBody.velocityX;

            // Adjust the rotation of the RigidBody so it appears to point
            // towards its path.
            rigidBody.rotation = Math.atan(rigidBody.velocityY / rigidBody.velocityX);
        } else {
            // Set the velocity of the RigidBody to zero.
            rigidBody.velocityX = 0;
            rigidBody.velocityY = 0;
        }      
    }

};
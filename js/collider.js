var collider = {

    update: function () {
        // These variables are used in the loop below.
        var dist, distanceX, distanceY, balloon, arrow;

        // Iterate over each arrow with a for-loop.
        for (var i = 0; i < currentArrows.length; i++) {
            arrow = currentArrows[i];

            // Iterate over each balloon with a for-loop. We iterate backwards
            // this time so that when we remove balloons from the array, it
            // wont affect the subsequent iterations.
            for (var j = currentBalloons.length - 1; j >= 0; j--) {
                balloon = currentBalloons[j];
                // Determine the distance between the arrow and the balloon on
                // the X and Y axes. 
                distanceX = balloon.rigidBody.x - arrow.rigidBody.x;
                distanceY = balloon.rigidBody.y - arrow.rigidBody.y;

                // Calculate the true distance between the arrow and the balloon
                // using the pythagorean theorem.
                dist = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                
                // If the distance between the arrow and the balloon is less 
                // than or equal to their combined radii, remove the balloon
                // from the array.
                if (dist <= balloon.rigidBody.radius + arrow.rigidBody.radius) {
                    currentBalloons.splice(j, 1);
                }
            }
        }
    }

};
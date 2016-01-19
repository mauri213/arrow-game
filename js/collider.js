var collider = {
    update: function () {
        var dist;
        var distanceX;
        var distanceY;
        var balloon;
        var arrow;
        var index;
        var i = currentArrows.length;
        var spliced = [];

        while (i--) {
            arrow = currentArrows[i];

            for (var j = currentBalloons.length - 1; j >= 0; j--) {

                balloon = currentBalloons[j];
                
                distanceX = balloon.rigidBody.x - arrow.rigidBody.x;
                distanceY = balloon.rigidBody.y - arrow.rigidBody.y;
                dist = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

                if (dist <= balloon.rigidBody.radius + arrow.rigidBody.radius) {
                    //spliced[i] = 1;
                    //currentBalloons.splice(i, 1);
                    currentBalloons.splice(j, 1);
                }
            }
        }
    }
}
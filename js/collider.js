var collider = {
    update: function () {
        var distanceX;
        var distanceY;
        var balloon;
        var arrow;
        for (var i = 0; i < currentBalloons.length; i++) {
            balloon = currentBalloons[i];
            for (var j = 0; j < currentArrows.length; j++) {
                arrow = currentArrows[j];
                distanceX = balloon.rigidBody.x - arrow.rigidBody.x;
                distanceY = balloon.rigidBody.y - arrow.rigidBody.y;
                dist = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                if (dist <= balloon.rigidBody.radius + arrow.rigidBody.radius) {
                    currentBalloons.splice(currentBalloons.indexOf(balloon), 1);
                }
            }   
        }
    }
}
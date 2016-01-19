var physics = {
    gravity: 0.1,
    apply: function (rigidBody) {
        rigidBody.velocityY += this.gravity;
        if (rigidBody.y + rigidBody.radius < canvas.height - 10) {
            rigidBody.y += rigidBody.velocityY;
            rigidBody.x += rigidBody.velocityX;
            rigidBody.rotation = Math.atan(rigidBody.velocityY / rigidBody.velocityX);
        }        
    }
};
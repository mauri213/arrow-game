var physics = function (rigidBody) {
    rigidBody.velocityY += gravity;
    if (rigidBody.y + rigidBody.radius < canvas.height - 10) {
        rigidBody.y += rigidBody.velocityY;
        rigidBody.x += rigidBody.velocityX;
        rigidBody.rotation = Math.atan(rigidBody.velocityY / rigidBody.velocityX);
    }
};
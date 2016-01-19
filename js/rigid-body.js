var RigidBody = function (x, y, radius, velocity, rotation) {
    velocity = velocity || 0;
    this.x = x;
    this.y = y;
    this.velocityX = Math.cos(rotation) * velocity;
    this.velocityY = -Math.sin(rotation) * velocity;
    this.radius = radius || 0;
    this.rotation = rotation || 0;
};
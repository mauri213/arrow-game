// This is an object constructor. Calling this function with the `new` keyword
// will create a new instance of RigidBody.
//
// eg.
//      var rigidBody = new RigidBody();
// 
// Instances of RigidBody are responsible for keeping track of the position,
// size, speed (velocity), and angle of Entities in our game.

var RigidBody = function (x, y, radius, velocity, rotation) {
    velocity = velocity || 0;
    this.x = x;
    this.y = y;
    this.velocityX = Math.cos(rotation) * velocity;
    this.velocityY = -Math.sin(rotation) * velocity;
    this.radius = radius || 0;
    this.rotation = rotation || 0;
};
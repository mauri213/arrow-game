// Create a new image with the line.png file.
var lineImage = new Image();
lineImage.src = './assets/line.png';

// Create a new Entity to represent our player. The Entity is composed of a
// View object, a visual representation of the entity, and a RigidBody, the
// physical/mathematical representation of the object.
var archer = new Entity(
    new View(lineImage),
    new RigidBody(20, canvas.height - 25)
);

// Create an object to organize our player functions.
var player = {
    
    // This function will update the archer on the canvas.
    update: function () { 
        // Call the render() function with the x and y coordinates of our
        // player, the image we want to draw on screen, and the rotation of the
        // image.
        render(
            archer.rigidBody.x,
            archer.rigidBody.y,
            archer.view.image,
            archer.rigidBody.rotation
        );
    }
    
};
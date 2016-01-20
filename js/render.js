// This function will take information about the position and appearance of a
// game object and draw it on the canvas.
var render = function (x, y, image, rotation, offsetX, offsetY) {
    // Save the inital rotation and origin of the canvas.
    context.save();

    // Move the origin of the canvas to the X and Y coordinates of what we want
    // to draw.
    context.translate(x, y);

    // Rotate the canvas to the rotation of what we want to draw.
    context.rotate(rotation);

    // Draw the image either directly at the origin or adjusted based on the
    // offsets.
    context.drawImage(image, offsetX || 0, offsetY || 0);

    // Restore the initial rotation and origin of the canvas.
    context.restore();
};
var render = function (x, y, image, rotation, offsetX, offsetY) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.drawImage(image, offsetX || 0, offsetY || 0);
    context.restore();
};
// This is an object constructor. Calling this function with the `new` keyword
// will create a new instance of View.
//
// eg.
//      var view = new View();
// 
// Instances of View are responsible for keeping track of the visual appearance
// of Entities in our game.

var View = function (image, offsetX, offsetY) {
    this.image = image;
    this.offsetX = offsetX || 0;
    this.offsetY = offsetY || 0;
};
// Get a reference to the canvas element.
var canvas = document.getElementById('game');

// Manually set the height and width of the canvas element.
canvas.height = 400;
canvas.width = 600;

// Get a 2-dimensional context from the canvas. We use this to draw shapes
// and images on the canvas.
var context = canvas.getContext('2d');

var mouse = {

    // This property holds the time of the last `mousedown` event.
    time: Date.now(),

    // This property holds the angle the mouse is at relative to the bottom left
    // corner of the canvas.
    rotation: 0

};

// Add an "event listener" to the canvas element that will execute a function
// when the user performs the specified event. The event in this case is
// `mousedown` which will execute the function when the user clicks on the
// canvas.
canvas.addEventListener('mousedown', function () {
    // Update the value of the time variable with the current time.
    mouse.time = Date.now();
});

// This event listener will execute a function that updates the value of
// mouse.rotation (defined above) when the user moves their mouse across
// the canvas.
canvas.addEventListener('mousemove', function () {
    // Get the position of the corners of the canvas element relative to the
    // page.
    var rect = canvas.getBoundingClientRect();

    // Determine the X and Y coordinates of the mouse on the canvas by
    // accounting for the position of the canvas relative to the page.
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.bottom;

    // Use the arctangent function to determine the angle of the mouse relative
    // to the bottom left corner of the canvas.
    mouse.rotation = Math.atan(y / x);
    
    // Update the archer entity with the rotation so that it points to the
    // mouse when the user moves it.
    archer.rigidBody.rotation = mouse.rotation;
});

// This event listener will shoot an arrow (or arrows) when the user releases
// their mouse button.
canvas.addEventListener('mouseup', function () {
    // Determine the velocity of the arrow by calculating the duration of time
    // between the 'mousedown` and 'mouseup` events using the time variable.
    // We divide velocity by some arbitrary number - 100 in this example - to
    // get an effect that just "feels right".
    var velocity = (Date.now() - mouse.time) / 100;
    // Shoot the arrow(s) with the specified velocity and rotation.
    arrows.shoot(velocity, mouse.rotation);
});
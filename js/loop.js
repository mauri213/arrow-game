// This function will take a function and execute it repeatedly on every frame
// that the browser renders. It will also clear the canvas before every loop, so
// that we can draw the updated images.
var loop = function (fn) {
    
    // Create a new function that we can call to start the loop.
    var looper = function () {
        // Clear the canvas.
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Execute the function passed into the `loop` function.
        fn();

        // Call looper again on the next frame.
        requestAnimationFrame(looper);
    };

    // Start the loop.
    looper(); 
};
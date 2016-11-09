// This function will take a function and execute it repeatedly on every frame
// that the browser renders.
var loop = function (fn) {
    
    // Create a new function that we can call to start the loop.
    var looper = function () {
        // Execute the function passed into the `loop` function.
        fn();

        // Call looper again on the next frame.
        requestAnimationFrame(looper);
    };

    // Start the loop.
    looper(); 
};
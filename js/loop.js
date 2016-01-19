var loop = function (fn) {
    (function looper () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        fn();
        requestAnimationFrame(looper);
    }());
};
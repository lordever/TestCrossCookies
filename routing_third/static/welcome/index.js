window.onload = function () {
    window.addEventListener('message', function (event) {
        var state = event.data.state;
        document.cookie = "stateFromSecond=" + state;
    });
};
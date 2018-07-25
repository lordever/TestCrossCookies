window.onload = function () {
        var state = document.cookie.split('=')[2];
        if (state) {
                window.top.postMessage({ state: state }, '*');
        }
}
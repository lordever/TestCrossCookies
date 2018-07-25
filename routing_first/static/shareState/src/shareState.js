window.onload = function () {
    var urlAttribute = parent.window.location.search.replace('?', '').split('=');
    var iframeUrl = urlAttribute[0] === 'redirectUri' ? urlAttribute[1] : null;

    if (iframeUrl) {
        var ifrm = document.createElement('iframe');
        ifrm.setAttribute("src", iframeUrl+"?fromSecond=testValue");
        ifrm.style.dysplay = 'none';
        parent.document.body.appendChild(ifrm);

        ifrm.onload = function () {
            var state = getState();
            this.contentWindow.postMessage(state, '*');
        }
    }

    window.addEventListener('message', function (data) {
        document.cookie = 'fromSecond=' + data.data.city;
        localStorage.setItem("fromSecond", data.data.city);
    });

    function getState() {
        return { name: 'John' };
    }
}

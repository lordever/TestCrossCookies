window.onload = function () {
    localStorage.setItem('name', 'John');
    document.getElementById("btn-setter").addEventListener('click', function () {
        var iframe = document.getElementById('secondIframe');
        if (iframe && iframe.contentWindow) {
            var state = localStorage.getItem('name');
            if (state) {
                iframe.contentWindow.postMessage({ name: state }, '*');
                var win = window.open('http://seconddomain.gre:3005/setcookie', 'test_cookie', 'width=100,height=100,top=10000,left=10000');
                win.close();
            }
        }
    });
}
window.addEventListener('message', function (data) {
    document.cookie = 'fromSecond=' + data.data.city;
    localStorage.setItem("fromSecond", data.data.city);
});
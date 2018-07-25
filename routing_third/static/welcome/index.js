window.onload = function () {
    document.getElementById("windowPopup").addEventListener('click', function () {
        var win = window.open('http://seconddomain.gre:3005/setcookie', 'test_cookie', 'width=100,height=100,top=10000,left=10000');
    });
    window.addEventListener('message', function (event) {
        var state = event.data.state;
        document.cookie = "stateFromSecond=" + state;
    });
}
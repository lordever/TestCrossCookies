//установка состояния в куки и localStorage на Domain2, после отправки сообщения на Domain1
$(document).ready(function () {
    window.addEventListener('message', function (data) {
        document.cookie = 'fakeCookie=fake;path=/';
        document.cookie = 'fromFirst=' + data.data.name+';path=/';
        localStorage.setItem('unusedKey', null);
        localStorage.setItem("fromFirst", data.data.name);
    });
});

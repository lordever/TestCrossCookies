 window.addEventListener('message', function(data){
        document.cookie = 'fromFirst='+data.data.name;
        localStorage.setItem("fromFirst", data.data.name);
});
setTimeout(function(){
        var iframe = document.getElementById('firstIframe');
        iframe.contentWindow.postMessage({city: 'New-York'}, '*');
}, 2000);


setTimeout(function(){
    var iframe = document.getElementById("secondIframe");
    iframe.contentWindow.postMessage({name: "John"}, "*");
}, 2000);

window.addEventListener('message', function(data){
    document.cookie = 'fromSecond='+data.data.city;
    localStorage.setItem("fromSecond", data.data.city);
})
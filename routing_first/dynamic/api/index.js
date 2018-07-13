var iframe = document.getElementById('secondIframe');
var content = iframe.contentDocument || iframe.contentWindow.document;

console.log(content);
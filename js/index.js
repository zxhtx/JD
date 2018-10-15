window.onload=function () {
    var banner=document.querySelector(".banner");
    var ul=document.querySelector(".banner>ul");
    var bannerWidth=banner.clientWidth;
        var timer=null;
    ul.style.transition="all 1s";
    var posx1=posx2=0;
    var index=1;
    banner.addEventListener("touchstart",function (ev) {
        posx1=ev.changedTouches[0].clientX;
        // alert(posx1);
        ul.style.transition="none";
        window.clearInterval(timer);

    })



    banner.addEventListener("touchmove",function (ev) {
        posx2=ev.changedTouches[0].clientX;
        var distance=posx2-posx1;
        // alert(distance);
        translateX= -index*bannerWidth+distance;
        ul.style.transform="translateX(" + translateX + "px)";

    })


    banner.addEventListener("touchend",function (ev) {
        posx2 = ev.changedTouches[0].clientX;
        var distance = posx2 - posx1;
        if (distance >50) {
            index--;
            // if (index<0){
            // index=7
            // }

            setUlTranslateX();
        } else if (distance< -50) {
            index++;
            // if (index>=8){
            //     index=0;
            // }
            setUlTranslateX();
        }else{
            setUlTranslateX();
        }
        ul.style.transition = "all 1s";
        //触摸结束，重新启动定时器。
        timer = window.setInterval(autoPlay, 3000);


    });


    ul.addEventListener("transitionend",function () {
        //如果index大于等于9，那么停止过渡，让index突变成
    if (index>=9){
        ul.style.transition="none";
        index=1;
        setUlTranslateX();

    }else{
        if (index<=0){
            ul.style.transition="none";
            index=8;
            setUlTranslateX();
        }
    }
    //过渡结束调用小圆点
    setNav();
    })
    //小圆点
    function setNav() {
        document.querySelector(".banner>div>span.now").classList.remove("now");
        document.querySelectorAll(".banner>div>span")[index-1].classList.add("now");
    }
    function setUlTranslateX(){
        translateX = -index * bannerWidth;
        ul.style.transform = "translateX(" + translateX + "px)";
    }

    function autoPlay() {
        ul.style.transition="all 1s";
        index++;
        setUlTranslateX();

    }

    timer=window.setInterval(autoPlay,3000);


}
$( document ).ready(function() {
    function elShow(el, topY, time, font){
        el.animate({
            top: topY,
            'font-size': font
        }, time);
    };
    var $trxDrop = $('.js-trx-side-left'),
        $numberOne = $('.js-number-show'),
        $boxDrop = $('.js-box-side-right'),
        $barDrop = $('.js-bar-side-left'),
        $numberTwo = $('.js-number-two'),
        $numberThree = $('.js-number-three'),
        $trxDropTop = $trxDrop.offset().top,
        $numberOneTop = $numberOne.offset().top,
        $boxDropTop = $boxDrop.offset().top,
        $barDropTop = $barDrop.offset().top,
        $numberTwoTop = $numberTwo.offset().top,
        $numberThreeTop = $numberThree.offset().top,
        winH = $(window).height();
    $(window).scroll(function(){
        if(winH > $trxDropTop){
            setTimeout(function(){
                elShow($trxDrop);
            }, 2000);
        }
        if($(this).scrollTop() > $trxDropTop){
            elShow($trxDrop, 160, 900);
        }
        if($(this).scrollTop() > ($numberOneTop - winH)){
            if($(window).width() >= 1200){
                elShow($numberOne, -236, 500);
            }
            else{
                elShow($numberOne, -157, 500);
            }
        }
        if($(this).scrollTop() > $boxDropTop){
            elShow($boxDrop, 240, 700);
        }
        if($(this).scrollTop() > ($numberTwoTop - winH)){
            if($(window).width() >= 1200){
                $numberTwo.animate({
                    'font-size': 366
                }, 500)
            }
            else{
                $numberTwo.animate({
                    'font-size': 254
                }, 500)
            }
        }
        if($(this).scrollTop() > $barDropTop){
            elShow($barDrop, 320, 700);
        }
        if($(this).scrollTop() > ($numberThreeTop - (winH + (winH/5)))){
            if($(window).width() >= 1200){
                $numberThree.animate({
                    'font-size': 366
                }, 500)
            }
            else{
                $numberThree.animate({
                    'font-size': 254
                }, 500)
            }
        }
    })
});
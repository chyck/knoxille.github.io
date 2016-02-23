
$( document ).ready(function() {
    $('.lang-list__item a').each(function(){
        $curLang$ = $('html').attr('lang');
        if($curLang$ == 'en' && $(this).text() == 'ENG'){
            $(this).addClass('current-lang');
        }
        else if($curLang$ == 'ru' && $(this).text() == 'РУС'){
            $(this).addClass('current-lang');
        }
        else if($curLang$ == 'ua' && $(this).text() == 'УКР'){
            $(this).addClass('current-lang');
        }
    });
    $('.navigation__list__item a').each(function(){
        if($(this).attr('href') == '#'){
            $(this).addClass('current-page');
        }
    });

    if(screen.width <= 960){
        $('.navigation__list__item a').each(function(){
            if($(this).attr('href') == '#'){
                $(this).parent().addClass('current-page');
            }
        });
        $swipe = $('.navigation').width();
        $('.navigation').css({
            'right': '-' + $swipe + 'px',
            'height': $(window).height()
        });
        $(".js-btn-show-nav").on("click", function(event){
            $(this).toggleClass('js-btn-hide-nav');
            if ($(this).hasClass('js-btn-hide-nav')) {
                $('.navigation').animate({
                    right: 0
                },500);
            } else {
                $('.navigation').animate({
                    right: '-' + $swipe
                },500);
            }
        });
    };
    var MY_MAPTYPE_ID = 'ebshmap';
    function initialize() {
        var stylez =  [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { "invert_lightness": true },
                    { "saturation": -90 }
                ]
            }
        ];
        var mapOptions = {
            center: new google.maps.LatLng(50.459763, 30.511856),
            zoom: 16,
            panControl: false,
            zoomControl: true,
            scaleControl: true,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: MY_MAPTYPE_ID
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: '',
            icon: 'images/map-mark.png'
        });
        var styledMapOptions = {
            name: "Dark"
        };
        var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);

    }
    $(function(){
        initialize();
    });
    $('.js-form-show').click(function(){
        $(this).hide();
        $('.form-hide').addClass('form-visible');
    });

    (function () {
        $('.js-input').focus(function(){
            var $value = $(this).val();
            if($value == ''){
                $(this).next().addClass('focus');
            }
        });
        $('.js-input').blur(function(){
            var $value = $(this).val();
            if($value == ''){
                $(this).next().removeClass('focus');
            }
        });
        $(".js-form-contacts").submit(function(){
            var form = $(this);
            var error = false;
            form.find('.js-input-required').each( function(){
                if ($(this).val() == '') {
                    $(this).addClass('error');
                    error = true;
                }
            });
            if (!error) {
                var data = form.serialize();
                $.ajax({
                    type: 'POST',
                    url: 'forms-asction.php',
                    dataType: 'text',
                    data: data,
                    beforeSend: function(data) {
                        form.find('input[type="submit"]').attr('disabled', 'disabled');
                    },
                    success: function(data){
                        $('.js-form-contacts, .number').css({'display':'none'});
                        $('.after-form').addClass('after-form_visible');
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    },
                    complete: function(data) {
                        form.find('input[type="submit"]').prop('disabled', false);
                    }

                });
            }
            return false;
        });
        $(".js-form-get-card").submit(function(){
            var form = $(this);
            var error = false;
            form.find('.js-input-required').each( function(){
                emailRegEx = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                if ($(this).val() == '') {
                    $(this).addClass('error');
                    error = true;
                }
            });
            if (!error) {
                var data = form.serialize();
                $.ajax({
                    type: 'POST',
                    url: 'forms-asction.php',
                    dataType: 'text',
                    data: data,
                    beforeSend: function(data) {
                        form.find('input[type="submit"]').attr('disabled', 'disabled');
                    },
                    success: function(data){
                        $('.js-form-get-card').css({'display':'none'});
                        $('.after-form').addClass('after-form_visible');
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    },
                    complete: function(data) {
                        form.find('input[type="submit"]').prop('disabled', false);
                    }

                });
            }
            return false;
        });
    })();
    function menuVis(){
        if($(window).width() > 960){
            var startElem = 4;
            for(var i = 0; i < startElem; i++){
                $('.product-table').eq(i).addClass('product-table_visible')
            }
            $('.js-load-menu').click(function(ev){
                ev.preventDefault();
                elemCount = $('.product-table_visible').length;
                for(var j = elemCount;j < (elemCount + 4);j++ ){
                    $('.product-table').eq(j).addClass('product-table_visible');
                }
            });
        }
        if($(window).width() <= 960){
            var startElem = 2;
            for(var i = 0; i < startElem; i++){
                $('.product-table').eq(i).addClass('product-table_visible')
            }
            $('.js-load-menu').click(function(ev){
                ev.preventDefault();
                elemCount = $('.product-table_visible').length;
                for(var j = elemCount;j < (elemCount + 2);j++ ){
                    $('.product-table').eq(j).addClass('product-table_visible');
                }
            });
        }
    }
    menuVis();
    function shopVis(){
       var startElem = 6;
        for(var i = 0; i < startElem; i++){
            $('.sport-products__inner__item').eq(i).addClass('sport-products__inner__item_visible')
        }
        $('.js-btn-shop').click(function(ev){
            ev.preventDefault();
            elemShop = $('.sport-products__inner__item_visible').length;
            for(var j = elemShop;j < (elemShop + 6);j++ ){
                console.log(elemShop)
                $('.sport-products__inner__item').eq(j).addClass('sport-products__inner__item_visible');
            }
        });
    }
    shopVis();

    $('.product-table:even').addClass('product-table_left');
    $('.product-table:odd').addClass('product-table_right');

    $('.color-list__item:even:not(first)').addClass('color-list__item_light');
    $('.color-list__item:odd:not(first)').addClass('product-table_right_gray');
    $('.film_roll_shuttle a, .film_roll_shuttle div, .film_roll_shuttle img').click(function(ev){
        ev.preventDefault();
        $(this).addClass('current');
    });

    $('.js-get-start').click(function(ev){
        ev.preventDefault();
    });


});






















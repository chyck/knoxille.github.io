$( document ).ready(function() {
        $movie = $('.js-video'),
        $video = $('.video'),
        $playBtn = $(".js-button-video"),
        $closeBtn = $('.js-video-btn-close');
    $(window).scroll(function(){
        $topFinal = $video.offset().top - $(window).scrollTop(),
        $leftFinal = $video.offset().left,
        $top = $video.offset().top - $(window).scrollTop(),
        $topBtn = $playBtn.offset().top - $(window).scrollTop(),
        $left = $video.offset().left,
        $leftBtn = $playBtn.offset().left;
    });
        $startWidth = 480,
        $startHeight = 278

    function showMovie() {
        $movie.get(0).play();
        $playBtn.css({'display':'none'});
        $video.css({
            'top': $top,
            'left': $left,
            'position': 'fixed'
        }).animate({
            width: $(window).width(),
            height: $(window).height(),
            top: 0,
            left: 0
        }, 500, function(){
            $closeBtn.css({
                'display': 'block'
            })
        });
    };
    function hideMovie() {
        $movie.get(0).pause();
        $playBtn.css({'display':'block'});
        $video.css({
            'top': 0,
            'left': 0,
            'position': 'fixed'
        }).animate({
            width: $startWidth,
            height: $startHeight,
            'top': $topFinal,
            'left': $leftFinal
        }, 500, function(){
            $video.css({
                'position': 'relative',
                'top': 0,
                'left': 0
            })
        });
    };
    $playBtn.on("click", function(){
        $video.toggleClass('video_watch');
        if ($video.hasClass('video_watch')) {
            showMovie();
        }
        else {
            hideMovie();

        }

    });
    $closeBtn.on("click", function () {
        $(this).css({'display':'none'});
        $video.removeClass('video_watch');
        hideMovie();
    });
    $movie.on("click", function () {
        if($(this).get(0).paused){
            $(this).get(0).play();
            $playBtn.css({'display':'none'})
        }
        else {
            $(this).get(0).pause();
            $playBtn.css({'display':'block'});
        }
    });



});
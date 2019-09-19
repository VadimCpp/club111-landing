jQuery(document).ready(function() {
    $('.nav-item').click(function() {
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').removeClass('collapse').removeClass('show').addClass('collapse');
    });

    var $navBar = $('.sticky-top');
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $navBar.addClass('border-b');
        } else {
            $navBar.removeClass('border-b');
        }

        if ($(this).scrollTop() > 200) {
            $("#go-top").fadeIn();
        } else {
            $("#go-top").fadeOut();
        }
    });

    $("#go-top").click(function() {
        window.location.href = "#"
    });

    //slider

    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 3000;
    var translateWidth = 0;
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('[id=viewport]').hover(function() {
        clearInterval(switchInterval);
        }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('[id=slidewrapper]').css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = -$('[id=viewport]').width() * (slideNow);
            $('[id=slidewrapper]').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }
});

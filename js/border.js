jQuery(document).ready(function () {
    var $navBar = $('.sticky-top');
    var navPos = $navBar.offset().top;
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos >= navPos) {
            $navBar.addClass('border-b');
        } else {
            $navBar.removeClass('border-b');
        }
    });
});

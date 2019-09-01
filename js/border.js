jQuery(document).ready(function () {
    var $navBar = $('.sticky-top');
    $(window).scroll(function () {        
        if ($(this).scrollTop() >= 200) {
            $navBar.addClass('border-b');
        } else {
            $navBar.removeClass('border-b');
        }
    });
});

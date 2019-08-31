jQuery(document).ready(function () {
    $('.nav-item').click(function () {
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').removeClass('collapse').removeClass('show').addClass('collapse');
    });
});

jQuery(document).ready(function() {

    $("#go-top").click(function() {
        window.location.href = "#"
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()>200) {
            $("#go-top").fadeIn();
        }
        else {
            $("#go-top").fadeOut();
        }
    });

  });

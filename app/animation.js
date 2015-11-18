$(document).ready(function() {
    $(window).scroll(function () {
        $('.portfolio').each(function () {

            var imagePos = $(this).offset().top,
                topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeIn");
            }
        });
    });
});
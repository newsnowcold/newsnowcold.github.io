$(document).ready(function() {
	//fadeIn effect 
    $(window).scroll(function () {
        $('.portfolio').each(function () {

            var imagePos = $(this).offset().top,
                topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + 600) {
                $(this).addClass("fadeIn");
            }
        });
    });

});
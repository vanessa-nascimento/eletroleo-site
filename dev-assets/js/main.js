$(document).ready(function() {


    $(window).scroll(function () {
        /* affix after scrolling 100px */
        if ($(document).scrollTop() > 100) {
            $('[data-toggle="affix"]').addClass('affix');
        } else {
            $('[data-toggle="affix"]').removeClass('affix');
        }
    });
    
    /* smooth scroll */
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Init WOW.js and get instance
    // var wow = new WOW(
    //     {
    //         mobile: false,
    //     });
    // wow.init();
});
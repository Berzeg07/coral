$(document).ready(function() {

    // Mobile menu ========================================
    $(function() {
        function burger() {
            $('.main-nav').toggleClass('nav-show');
            var classCheck = $('.main-nav').hasClass('nav-show');
            if (classCheck) {
                $('.main-nav').slideToggle();
            } else {
                $('.main-nav').slideUp();
            }
        };
        $('.navbar').click(function() {
            burger();
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 992) {
                $('.main-nav').removeAttr('style');
            }
        });
    });





}); //END READY

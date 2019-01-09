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

    // show toggle menu ===================================
    // search-tour
    $('.search-tour').click(function(){
        $('.toggleMenu').toggleClass('toggleMenu-show');
        $('.search-tour').toggleClass('search-tour_active');
        $('.toggleMenu-close').click(function(){
            $('.toggleMenu').removeClass('toggleMenu-show');
        });
    });

    // Toggle menu tabs ===================================
    $('#tab-list a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.toggleMenu-box').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('#tab-list a:first').click();





}); //END READY

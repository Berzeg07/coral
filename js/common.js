$(document).ready(function() {

    // Mobile menu =============================================================
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

    // show toggle menu ========================================================
    $('.search-tour').click(function() {
        $('.toggleMenu').toggleClass('toggleMenu-show');
        $('.search-tour').toggleClass('search-tour_active');
        $('.toggleMenu-close').click(function() {
            $('.toggleMenu').removeClass('toggleMenu-show');
        });

        $(function() {
            $(document).click(function(event) {
                if ($(event.target).closest(".toggleMenu-show").length) return;
                if ($(event.target).closest(".search-tour").length) return;
                $('.toggleMenu').removeClass('toggleMenu-show');
                $('.search-tour').removeClass('search-tour_active');
                event.stopPropagation();
            });
        });

    });

    // Toggle menu tabs ========================================================
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

    // slider ==================================================================
    var mainSliderSelector = ".main-slider",
        interleaveOffset = 0.5;

    var mainSliderOptions = {
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000
        },
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            init: function() {
                this.autoplay.stop();
            },
            imagesReady: function() {
                this.el.classList.remove("loading");
                this.autoplay.start();
            },
            slideChangeTransitionEnd: function() {
                var swiper = this,
                    captions = swiper.el.querySelectorAll(".caption");
                for (var i = 0; i < captions.length; ++i) {
                    captions[i].classList.remove("show");
                }
                swiper.slides[swiper.activeIndex]
                    .querySelector(".caption")
                    .classList.add("show");
            },
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                        speed + "ms";
                }
            }
        }
    };
    var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

    // form button animation ===================================================
    var button = $('.tour-form_btn');

    button.on('click', function() {
        var $this = $(this);
        if ($this.hasClass('active') || $this.hasClass('success')) {
            return false;
        }
        $this.addClass('active');
        setTimeout(function() {
            $this.addClass('loader');
        }, 125);
        setTimeout(function() {
            $this.removeClass('loader active');
            $this.text('Спасибо!');
            $this.addClass('success animated pulse');
        }, 1600);
        setTimeout(function() {
            $this.text('подберите мне тур');
            $this.removeClass('success animated pulse');
            $this.blur();
        }, 2900);
    });

    var swiper = new Swiper('.reviews-slider', {
        slidesPerView: 4,
        spaceBetween: 38,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


}); //END READY

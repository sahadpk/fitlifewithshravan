/* ----------------------------------------------------------------

[ Custom settings ]

01. ScrollIt
02. Preloader
03. Navbar scrolling background
04. Close navbar-collapse when a clicked
05. Sections background image from data background 
06. Isotope Active Masonry Gallery
07. Animations
08. YouTubePopUp
09. Classes owlCarousel
10. Classes 2 owlCarousel
11. Trainers owlCarousel
12. Testimonials owlCarousel
13. Clients owlCarousel
14  Blog owlCarousel
15. MagnificPopup (Image, Youtube, Vimeo & Custom PopUp)
16. Accordion
17. Contact Form
18. Scroll back to top
19. Slider
20. Mouse effect 


------------------------------------------------------------------- */
$(function () {
    "use strict";
    var wind = $(window);
    // ScrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    
    // Preloader
    $("#preloader").fadeOut(500);
    $(".preloader-bg").delay(500).fadeOut(500);
    var wind = $(window);
    
    // Navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logoone.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logoone.png');
        }
    });
    
    // Close navbar-collapse when a clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Isotope Active Masonry Gallery
    $('.gallery-items').imagesLoaded(function () {
        // Add isotope on click filter function
        $('.gallery-filter li').on('click', function () {
            $(".gallery-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".gallery-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
        $(".gallery-items").isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });
    });
    
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Classes owlCarousel
    $('.classes .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: true
        , navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"]
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    
    // Classes 2 owlCarousel
    $('.class2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    // Trainers owlCarousel
    $('.trainers .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nov: false,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 10,
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Blog owlCarousel 
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });
    
    // Accordion
    $(".accordion").on("click", ".title", function () {
        $(this).next().slideDown();
        $(".accordion-info").not($(this).next()).slideUp();
    });
    $(".accordion").on("click", ".item", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    // Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        }).done(done_func).fail(fail_func);
    });

    //  Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })  
});

// Slider 
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('h6').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.button-1').removeClass('animated fadeInUp');
        $('.button-2').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.button-1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.button-2').addClass('animated fadeInUp');
    });
});


// Mouse effect 
function mousecursor() {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};
$(function () {
    mousecursor();
});

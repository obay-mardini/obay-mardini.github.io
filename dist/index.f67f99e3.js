/*
Template Name: Flourish
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.0
*/ //----------------------------------- Document ready -----------------------------------//
$(document).ready(function() {
    "use strict";
    //Scrolling feature 
    $(".page-scroll a").on("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
    //Owl-carousels
    $("#owl-services").owlCarousel({
        nav: true,
        margin: 20,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        dots: true,
        loop: true,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $("#owl-testimonial").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        autoplayHoverPause: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    $("#owl-team").owlCarousel({
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        dots: true,
        margin: 10,
        loop: true,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
}); // end document ready
//----------------------------------- Window load function -----------------------------------//
$(window).load(function() {
    "use strict";
    // cookie banner
    window.wpcc && window.wpcc.init({
        "border": "thin",
        "corners": "small",
        "colors": {
            "popup": {
                "background": "#ffe4e1",
                "text": "#000000",
                "border": "#c25e5e"
            },
            "button": {
                "background": "#c25e5e",
                "text": "#ffffff"
            }
        },
        "position": "bottom"
    });
    // Page Preloader 	
    $("#preloader").fadeOut("slow");
    //Gallery Isotope 
    var $container = $("#gallery-isotope");
    $container.isotope({
        filter: "*",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
            layoutMode: "masonry"
        }
    });
    $(window).smartresize(function() {
        $container.isotope({
            columnWidth: ".col-sm-3"
        });
    });
    // Magnific Popup
    $("#gallery").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
    //Gallery Nav Filter
    $(".cat a").on("click", function() {
        $(".cat .active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });
}); // end window load function

//# sourceMappingURL=index.f67f99e3.js.map

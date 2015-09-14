$(document).ready(function() {
    var header = $(".js-header");
    var body = $("body");
    $(document).on("click", function() {
        if ($(".js-search").hasClass("is-active")) {
            $(".js-search").removeClass("is-active");
        }
        if ($('.js-toggle-user').parent().hasClass("is-active")) {
            $('.js-toggle-user').parent().removeClass("is-active");
            $('.js-list-user').removeClass("is-active");
        }
        if ($('.js-toggle-lang').hasClass("is-active")) {
            $('.js-toggle-lang').removeClass("is-active");
        }

        if ($('.js-popup').hasClass("is-active")) {
            $('.js-popup').removeClass("is-active");
            body.removeClass("no-scroll").css({
                marginRight: 0
            });
        }

        if ($(".js-list").hasClass("is-active")) {
            $(".js-list").removeClass("is-active");
            $(".js-toggle-list").removeClass("is-active");
        }
    });



    // get scroll width;
    var scrollWidth;

    function getScrollBarWidth() {
        var inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild(outer);
        if ($("html").hasClass("desktop")) {
            scrollWidth = w1 - w2;
        } else {
            scrollWidth = 0;
        }

        return scrollWidth;

    }
    getScrollBarWidth();

    if ($("html").hasClass("desktop")) {
        if (body.hasClass("no-scroll")) {
            body.css({
                marginRight: scrollWidth
            });

        }
    }

    document.createElement("picture");

    // main slider
    var config = {
        slidesToShow: 1,
        dots: true,
        adaptiveHeight: true,
        arrows: false
    }
    $('.js-slider').on('init', function(slick) {
        setTimeout(function() {
            $('.slider').addClass("is-ready");
            $('.js-slider').addClass("is-ready");
        }, 200);
    });
    $(".js-slider").slick(config);
    $('.js-slider-prev').on('click', function(slick) {
        $(".js-slider").slick("slickPrev");
        return false;
    });
    $('.js-slider-next').on('click', function(slick) {
        $(".js-slider").slick("slickNext");
        return false;
    });

    // post slider
    var configPostSlider = {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 5000,
            settings: "unslick"
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    }

    $(".js-post-slider").slick(configPostSlider);

    // post slider
    var configSliderItems = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }

    $(".js-slider-items").slick(configSliderItems);
    $('.js-slider-items-prev').on('click', function(slick) {
        $(".js-slider-items").slick("slickPrev");
        return false;
    });
    $('.js-slider-items-next').on('click', function(slick) {
        $(".js-slider-items").slick("slickNext");
        return false;
    });
    // history slider
    var configHistorySlider = {
        slidesToShow: 1,
        dots: false,
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    }
    $('.js-history-slider').on('init', function(slick) {
        setTimeout(function() {
            $('.js-history-slider').addClass("is-ready");
        }, 200);
    });

    $(".js-history-slider").slick(configHistorySlider);
    //gid slider
    var configGidSlider = {
        slidesToShow: 10,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1230,
            settings: {
                slidesToShow: 8
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    }
    $('.js-gid-slider').on('init', function(slick) {
        setTimeout(function() {
            $('.js-gid-slider').addClass("is-ready");
        }, 200);
    });

    $(".js-gid-slider").slick(configGidSlider);

    $('.js-gid-slider-prev').on('click', function(slick) {
        $(".js-gid-slider").slick("slickPrev");
        return false;
    });
    $('.js-gid-slider-next').on('click', function(slick) {
        $(".js-gid-slider").slick("slickNext");
        return false;
    });


    // search
    $(".js-search").on('click', function(event) {
        event.stopPropagation();
    });

    $('.js-toggle-search').on('click', function() {
        $(".js-search").toggleClass("is-active");
        return false;
    });


    // user
    $(".js-list-user").on('click', function(event) {
        event.stopPropagation();
    });

    $('.js-toggle-user').on('click', function(event) {
        $(".js-list-user").toggleClass("is-active");
        $(this).parent().toggleClass("is-active");
        event.stopPropagation();
        return false;
    });

    // menu
    $('.js-toggle-menu').on('click', function() {
        if ($(this).hasClass("is-active")) {
            $(".js-menu").fadeOut(200);
            $(".js-menu").css({
                paddingRight: 0
            });
            body.removeClass("no-scroll").css({
                marginRight: 0
            });
            $(this).removeClass("is-active");
        } else {
            $(".js-menu").fadeIn(200);
            $(".js-menu").css({
                paddingRight: scrollWidth
            });
            body.toggleClass("no-scroll").css({
                marginRight: scrollWidth
            });
            $(this).addClass("is-active");
        }

        return false;
    });

    //fixed header
    function fixHeader() {
        var scrollTop = $(window).scrollTop();
        var height = header.outerHeight();
        if (scrollTop >= height) {
            body.addClass("has-fixed-header");
        } else {
            body.removeClass("has-fixed-header");
        }
    }
    if (!body.hasClass("main-full-page")) {
        fixHeader();
    }

    $(window).scroll(function() {
        if (!body.hasClass("main-full-page")) {
            fixHeader();
        }

    });


    // lang list
    $('.js-toggle-lang').on('click', function(event) {
        $(this).toggleClass("is-active");
        event.stopPropagation();
    });

    $('.js-toggle').on('click', function() {
        var el = $(this).attr("data-toggle");
        $("." + el).toggleClass("is-active");
        $(this).toggleClass("is-active");
        return false;
    });

    // popup
    $(".js-show-popup").on("click", function(event) {
        var popup = $(this).attr("data-popup");
        $(".js-popup").fadeOut();
        $("." + popup).addClass("is-active").fadeIn();
        body.addClass("no-scroll").css({
            marginRight: scrollWidth
        });
        event.stopPropagation();
        return false;
    });
    $(".js-popup").on("click", function() {
        $(this).fadeOut().removeClass("is-active");
        body.removeClass("no-scroll").css({
            marginRight: 0
        });
    });
    $(".js-close-popup").on("click", function() {
        $(this).parents(".js-popup").fadeOut().removeClass("is-active");
        body.removeClass("no-scroll").css({
            marginRight: 0
        });
        return false;
    });
    $(".js-popup-in").on("click", function(event) {
        event.stopPropagation();
    });

    // select list
    $(".js-select select").on("change", function(event) {
        var val = $(this).val();
        $(this).parents(".js-select").find(".input").val(val);
    });

    // file
    $(".js-file-btn").on("click", function() {
        $(this).parents(".js-file").find(".js-file-hidden").trigger("click");
    });
    $(".js-file-hidden").on("change", function() {
        var val = $(this).val();
        $(this).parents(".js-file").find(".js-file-input").val(val);
    });
    $(".js-file-input").on("click", function() {
        $(this).parents(".js-file").find(".js-file-hidden").trigger("click");
    });

    // accordion
    $(".js-accord-head").on("click", function() {
        var accord = $(this).parents(".js-accord");
        var accordBody = $(this).parents(".js-accord").find(".js-accord-body");
        if (accord.hasClass("is-active")) {
            accord.removeClass("is-active");
            accordBody.slideUp(200);
        } else {
            $(".js-accord").removeClass("is-active");
            $(".js-accord-body").hide();
            accord.addClass("is-active");
            accordBody.slideDown(200);
        }
        return false;

    });

    // scrollpane
    if ($('.scroll-pane').length) {
        var scrollPane = $('.scroll-pane').jScrollPane({
            autoReinitialise: true
        });
        var api = scrollPane.data('jsp');

    }

    // $(window).resize(function(){
    //  if($('.scroll-pane').length) {
    //      var scrollPane = $('.scroll-pane').jScrollPane();
    //      var api = scrollPane.data('jsp');
    //      api.reinitialise(s);
    //  }
    // });

    // fotorama
    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('.js-fotorama').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');

    $(".js-fotorama-prev").on("click", function() {
        fotorama.show('<');
        return false;
    });
    $(".js-fotorama-next").on("click", function() {
        fotorama.show('>');
        return false;
    });

    // item slider
    var configItemSlider = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        adaptiveHeight: false,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]
    }

    $(".js-item-slider").slick(configItemSlider);
    $(".js-item-slider-bas").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        adaptiveHeight: false,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // filter
    $(".js-open-filter").on("click", function() {
        var filter = $(this).attr("data-filter");
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $("." + filter).hide();
        } else {
            $(".js-open-filter").removeClass("is-active");
            $(".filter-row").hide();
            $(this).addClass("is-active");
            $("." + filter).show();
        }


        return false;
    });

    if (!$('body').hasClass("is-inactive-fullpage") && $('.js-fullpage').length) {

        $('.js-fullpage').fullpage({
            //Navigation
            menu: false,
            lockAnchors: false,
            // anchors:['firstPage', 'secondPage'],

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            scrollBar: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            normalScrollElements: '.footer',

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: false,
            verticalCentered: false,
            resize: true,
            fixedElements: '.js-section-nav',
            responsiveWidth: 0,
            responsiveHeight: 0,

            //Custom selectors
            sectionSelector: '.js-section',
            //slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction) {
                console.log(nextIndex);
                $(".js-section-nav a").removeClass("is-active");
                $(".js-section-nav li").eq(nextIndex - 1).find("a").addClass("is-active");
                $("body").attr("data-section", nextIndex);
            },
            afterLoad: function(anchorLink, index) {
                $(".js-section-nav a").removeClass("is-active");
                $(".js-section-nav li").eq(index - 1).find("a").addClass("is-active");
            },
            afterRender: function() {},
            afterResize: function() {},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

            }
        });
    }

    $(".js-section-nav a").on("click", function() {
        if (!$(this).hasClass("is-active")) {
            var index = +$(this).parent().index() + 1;
            $.fn.fullpage.moveTo(index);
            $(".js-section-nav a").removeClass("is-active");
            $(this).addClass("is-active");
            return false;
        }

    });


    $(".js-plant-info").hover(function() {
            var index = $(this).attr("data-index");
            $('[data-plant="' + index + '"]').addClass("is-active");
        },
        function() {
            var index = $(this).attr("data-index");
            $('[data-plant="' + index + '"]').removeClass("is-active");
        });

    setTimeout(function() {
        $(".js-plants").addClass("is-visible");
    }, 1000);

    $(".js-tag").on("click", function() {
        $(this).toggleClass("is-active");
        return false;
    });

    $(".js-toggle-list").on("click", function(event) {
        var list = $(this).attr("data-list");
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $("." + list).removeClass("is-active");
        } else {
            $(".js-toggle-list").removeClass("is-active")
            $(".js-list").removeClass("is-active")
            $(this).addClass("is-active");
            $("." + list).addClass("is-active");
        }
        event.stopPropagation();
        return false;
    });
    $(".js-list-mob a").on('click', function(e) {
        var listM = $(this).attr("data-open");
        $('.' + listM).addClass('is-open');
        e.stopPropagation();
        return false;
    } )
    $(".js-show-password").on("click", function(event) {
        var textVisible = $(this).text();
        var textHidden = $(this).attr("data-text");
        $(this).text(textHidden).attr("data-text", textVisible);
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active").parents(".js-password").find("input").attr("type", "password");
            $
        } else {
            $(this).addClass("is-active").parents(".js-password").find("input").attr("type", "text");
        }
        return false;
    });

    // $(".js-drop-list-main a").on("click", function(event){
    //  var parent = $(this).parent();
    //  var html = parent.html();
    //  var index = + new Date();
    //  $(this).attr("data-index", index);
    //  parent.addClass("is-active");
    //  $(".js-drop-list-active").append(html).find("a").last().attr("data-index", index);
    //  event.stopPropagation();
    //  return false;
    // });
    // $("body").on("click", ".js-drop-list-active a", function(event){
    //  var index = $(this).attr("data-index");
    //  $("body").find('[data-index="'+index+'"]').parent().removeClass("is-active");
    //  $(this).remove();
    //  event.stopPropagation();
    //  return false;
    // });

    // $(".js-list").on("click", function(event){
    //  event.stopPropagation();
    // });

    $(".js-remove").on("click", function(event) {
        $(this).parents(".js-parent").remove();
        return false;
    });
    if($(".js-tabs-arr").length) {
        $(".js-tabs-arr").scroll(function (){
            var scrollLeft =  $(".js-tabs-arr").scrollLeft();
            if(scrollLeft === 0) {
                $(this).addClass('is-start');
            } else if(scrollLeft > 0 && scrollLeft != ($('.js-tabs-main').width() - $(".js-tabs-arr").width())) {
                $(this).removeClass('is-start');
                $(this).removeClass('is-end');
            } else if(scrollLeft === ($('.js-tabs-main').width() - $(".js-tabs-arr").width())) {
                $(this).addClass('is-end');
            } 
        });
    }

    $('.fotorama').on('fotorama:show fotorama:load', function (e, fotorama, extra) {
        $('.js-carousel .meta > div').removeClass('is-active');
        $('.js-carousel .meta > div').eq(fotorama.activeFrame.i-1).addClass('is-active');
     }).fotorama();

});

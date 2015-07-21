$(function(){  
  var  body = $("body");
  new $.LazyJaxDavis(function(router){
    router.option({
       expr: {
         title: /<title[^>]*>([^<]*)<\/title>/,
         content: /<!-- LazyJaxDavis start -->([\s\S]*)<!-- LazyJaxDavis end -->/
       },
       davis: {
         linkSelector: '.js-section-nav a',
         throwErrors: false,
         handleRouteNotFound: true
       },
       minwaittime: 0,
       updatetitle: true,
       firereadyonstart: true,
       ignoregetvals: false
    });
    var $root = $('#lazyjaxdavisroot');

    router.bind('everyfetchstart', function(page){
      console.log("start");
    });

    router.bind('everyfetchsuccess', function(page){

      // load parent page
      if (body.hasClass("is-inactive-fullpage")) {
        var activeSection = body.attr("data-section");
        body.removeClass("is-inactive-fullpage");
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
          resize : true,
          //fixedElements: '.header, .menu, .section-nav',
          responsiveWidth: 0,
          responsiveHeight: 0,

          //Custom selectors
          sectionSelector: '.js-section',
          //slideSelector: '.slide',

          //events
          onLeave: function(index, nextIndex, direction){
            console.log(nextIndex);
            $("body").attr("data-section", nextIndex);
          },
          afterLoad: function(anchorLink, index){
            $(".js-section-nav a").removeClass("is-active");
            $(".js-section-nav li").eq(index-1).find("a").addClass("is-active");
          },
          afterRender: function(){},
          afterResize: function(){},
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            
          }
        });
        $.fn.fullpage.silentMoveTo(activeSection);
        $("body").find(".js-section.is-active").removeClass("is-active");
        $(window).trigger("resize");
      }

      // load inner page
      else {
        $("body").find(".js-section.active").addClass("is-active");
        $.fn.fullpage.destroy("all");
        body.addClass("is-inactive-fullpage");

      }
     
      $newcontent = $(page.rip('content'));
      $root.empty().append($newcontent);
      page.trigger('pageready');

    });

    router.bind('everyfetchfail', function(){
      alert('ajax error!');
      $root.css('opacity', 1);
    });

    router.bind('everypageready', function(){
       console.log("everypageready")
    });

  });

  $(".js-btn-history").on("click", function(){
    window.history.back();
    return false;
  });
});
$(function(){  
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
      $root.css('opacity', 0.6);
      console.log("start");
      
    });

    router.bind('everyfetchsuccess', function(page){

      if ($("body").hasClass("is-inactive-fullpage")) {
        $("body").removeClass("is-inactive-fullpage");
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
            $(".js-section-nav a").removeClass("is-active");
            $(".js-section-nav li").eq(nextIndex-1).find("a").addClass("is-active");
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
      }
      else {
        $.fn.fullpage.destroy('all');
        $("body").addClass("is-inactive-fullpage");
      }
     
      $root.css('opacity', 1);
      $newcontent = $(page.rip('content')).hide();
      $root.empty().append($newcontent);
      $newcontent.fadeIn();
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
});
head.ready(function() {

	$(document).on("click", function(){
		if ($(".js-search").hasClass("is-active")) {
			$(".js-search").removeClass("is-active");
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
	  outer.appendChild (inner);

	  document.body.appendChild (outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 == w2) w2 = outer.clientWidth;

	  document.body.removeChild (outer);
	  scrollWidth = w1 - w2;
	  return scrollWidth;

	}
	getScrollBarWidth();



	var header = $(".js-header");
	var body = $("body");

	document.createElement( "picture" );
	var config = {
		slidesToShow: 1,
		dots: true,
		arrows: false
	}
	$('.js-slider').on('init', function(slick) {
		setTimeout(function(){
			$('.slider').addClass("is-ready");
		},200);
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

	var configPostSlider = {
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	}
	if ($(window).width() < 1024) {
		$(".js-post-slider").slick(configPostSlider);
	}

	$(window).resize(function() {
		if ($(window).width() < 1024) {
			$(".js-post-slider").slick(configPostSlider);
		}
		if ($(window).width() >= 1024 && $(".js-post-slider").hasClass(".slick-slider"))  {
			$(".js-post-slider").slick("unslick");
		}
	});

	$(".js-search").on('click', function(event) {
		event.stopPropagation();
	});

	$('.js-toggle-search').on('click', function() {
		$(".js-search").toggleClass("is-active");
		return false;
	});


	$('.js-toggle-menu').on('click', function() {
		if ($(this).hasClass("is-active")) {
			$(".js-menu").hide();
			body.removeClass("has-open-nav").css({
				marginRight: 0
			});
			$(this).removeClass("is-active");
		}
		else {
			$(".js-menu").show();
			body.toggleClass("has-open-nav").css({
				marginRight: scrollWidth
			});
			$(this).addClass("is-active");
		}
		
		return false;
	});
	
	function fixHeader() {
		var scrollTop = $(window).scrollTop();
		var height = header.outerHeight();
		if (scrollTop >= height) {
			body.addClass("has-fixed-header");
		}
		else {
			body.removeClass("has-fixed-header");
		}
	}
	fixHeader();

	$(window).scroll(function() {
		fixHeader();
	});
	




	
});
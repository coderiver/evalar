head.ready(function() {
	var header = $(".js-header");
	var body = $("body");
	$(document).on("click", function(){
		if ($(".js-search").hasClass("is-active")) {
			$(".js-search").removeClass("is-active");
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
	  if ($("html").hasClass("desktop")) {
	  	scrollWidth = w1 - w2;
	  }
	  else {
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
			$(".js-menu").fadeOut(200);
			body.removeClass("no-scroll").css({
				marginRight: 0
			});
			$(this).removeClass("is-active");
		}
		else {
			$(".js-menu").fadeIn(200);
			body.toggleClass("no-scroll").css({
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

	$(".js-search").on('click', function(event) {
		event.stopPropagation();
	});

	$('.js-toggle-lang').on('click', function(event) {
		$(this).toggleClass("is-active");
		event.stopPropagation();
	});

	$('.js-toggle').on('click', function() {
		var el = $(this).attr("data-toggle");
		$("."+el).toggleClass("is-active");
		$(this).toggleClass("is-active");
		return false;
	});

	$(".js-show-popup").on("click", function(event){
		var popup = $(this).attr("data-popup");
		$(".js-popup").fadeOut();
		$("."+popup).addClass("is-active").fadeIn();
		body.addClass("no-scroll").css({
				marginRight: scrollWidth
			});
		event.stopPropagation();
		return false;
	});
	
	$(".js-popup").on("click", function(){
		$(this).fadeOut().removeClass("is-active");
		body.removeClass("no-scroll").css({
			marginRight: 0
		});
	});
	$(".js-close-popup").on("click", function(){
		$(this).parents(".js-popup").fadeOut().removeClass("is-active");
		body.removeClass("no-scroll").css({
				marginRight: 0
			});
		return false;
	});


	$(".js-popup-in").on("click", function(event){
		event.stopPropagation();
	});


	$(".js-select select").on("change", function(event){
		var val = $(this).val();
		$(this).parents(".js-select").find(".input").val(val);
	});

	$(".js-file-btn").on("click", function(){
		$(this).parents(".js-file").find(".js-file-hidden").trigger("click");
	});
	$(".js-file-hidden").on("change", function(){
		var val = $(this).val();
		$(this).parents(".js-file").find(".js-file-input").val(val);
	});
	$(".js-file-input").on("click", function(){
		$(this).parents(".js-file").find(".js-file-hidden").trigger("click");
	});

	$(".js-accord-head").on("click", function(){
		var accord = $(this).parents(".js-accord");
		var accordBody = $(this).parents(".js-accord").find(".js-accord-body");
		if (accord.hasClass("is-active")) {
			accord.removeClass("is-active");
			accordBody.slideUp(200);
		}
		else {
			$(".js-accord").removeClass("is-active");
			$(".js-accord-body").hide();
			accord.addClass("is-active");
			accordBody.slideDown(200);
		}
		return false;

	});
	if($('.scroll-pane').length) {
		$('.scroll-pane').jScrollPane();
	}

	
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

	
	
});
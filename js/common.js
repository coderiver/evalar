head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

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
		arrows: false
	}
	//$(".js-post-slider").slick(configPostSlider);
});
$(document).ready(function() {
	$('.slick__conteiner').slick({
  dots: true,
  infinite: true,
	autoplay: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next'
	});
	$('.forbes__conteiner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next'
	});
	$('.product__slick').slick({
  dots: true,
  infinite: true,
	autoplay: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next'
	});

	$('body').on('click', function(){
		if ($(window).width() <= 1000) {
			$('.js-header').removeClass('is-active');
			$('.js-header-nav').slideUp(200);
		}
	});

	$('.js-btn-menu').on('click', function(event){
		var this_ = $(this),
			parent = this_.parents('.js-header'),
			nav = parent.find('.js-header-nav');
		if (!parent.hasClass('is-active')){
			parent.addClass('is-active');
			nav.slideDown(200);
		}
		else {
			parent.removeClass('is-active');
			nav.slideUp(200);
		}
		event.stopPropagation();
	});

	$(window).resize(function() {
		if ($(window).width() >= 1000) {
			// console.log('ll');
			$('.js-header-nav').slideDown(200);
		}
		else {
			// console.log('ll');
			$('.js-header-nav').slideUp(200);
		}
	});

});

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
});

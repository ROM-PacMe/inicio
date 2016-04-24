$(document).ready(function(){
	var altura = $('.lol').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.lol').addClass('lol-fixed');
		} else {
			$('.lol').removeClass('lol-fixed');
		}
	});
 
});
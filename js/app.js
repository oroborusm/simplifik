(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		margin:10,
		autoplay:true
	})
	if ($(window).height() > 800) {
		$('#aparIzquierda, #aparDerecha2, #aparIzquierda3').addClass('fadeIn');
		$('#aparIzquierda2, #aparDerecha,  #aparDerecha3').addClass('slideRight');
	};
	$(window).scroll(function() {
		$('#aparDerecha,  #aparDerecha3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("slideRight");
			}
		});
		$('#aparIzquierda2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("slideLeft");
			}
		});
		$('#aparIzquierda, #aparDerecha2, #aparIzquierda3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("fadeIn");
			}
		});
	});
	$('a.scroll').on('click', function (e) {
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top -110
		}, 'slow');
		e.preventDefault();
	});
})();

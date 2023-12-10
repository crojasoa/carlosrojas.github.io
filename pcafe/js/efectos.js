$(document).ready(function(){

	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});
			
		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
	});
		if( $(window).width() > 800 ){
			$('header .textos').css ({
				opacity: 0,
				marginTop: 0
			});

			$('header .textos').animate ({
				opacity: 1,
				marginTop: '-52px'
			}, 3000);
	}
	var acercaDe = $('#acerca-de').offset().top;
	var menu = $('#menu').offset().top;
	var galeria = $('#galeria').offset().top;
	var ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: acercaDe }, 700);
	});
	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: menu }, 700);
	});
	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: galeria }, 700);
	});
	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: ubicacion}, 700);
	});
});
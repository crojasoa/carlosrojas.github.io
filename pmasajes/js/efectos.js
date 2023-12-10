$(document).ready(function(){
// Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 2000 + (index * 1000));
	});
// Scroll elementos menu
	var inicio = $('#inicio').offset().top;
	var quienesSomos = $('#quienes-somos').offset().top;
	var servicios = $('#servicios').offset().top;
	var Contacto = $('#Contacto').offset().top;

	$('#btn-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio }, 500);
	});	

	$('#btn-quienesSomos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: quienesSomos }, 500);
	});

	$('#btn-servicios').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios }, 500);
	});	

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: Contacto }, 500);
	});	

});
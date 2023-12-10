let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
	let Desplazamiento = window.pageYOffset;
	if(ubicacionPrincipal >= Desplazamiento){
		document.getElementById('navbar').style.marginTop = '0px';
	} else{
		document.getElementById('navbar').style.marginTop = '-250px';
	}
	ubicacionPrincipal = Desplazamiento;
}
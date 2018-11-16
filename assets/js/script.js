var slideItem = 0;

window.onload = function(){
	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slideShowArea = document.getElementsByClassName('slideShowArea');
	var slide = document.getElementsByClassName('slide');
	var cont = 0;

	var galeriaWidth = document.getElementById('galeria').offsetWidth;
	var galeriaArea = document.getElementsByClassName('galeriaArea');
	var foto = document.getElementsByClassName('foto');

	for(i=0; i<slide.length; i++){
		slide[i].style.width = slideWidth + 'px';
		foto[i].style.width = galeriaWidth + 'px';
		cont++;
	}

	for(i in slideShowArea){
		slideShowArea[0].style.width = slideWidth * cont + 'px';
		galeriaArea[0].style.width = galeriaWidth * cont + 'px';
	}
}

function Passar(pos){
	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slideShowArea = document.getElementsByClassName('slideShowArea');
	var slide = document.getElementsByClassName('slide');

	var galeriaWidth = document.getElementById('galeria').offsetWidth;
	var galeriaArea = document.getElementsByClassName('galeriaArea');
	var foto = document.getElementsByClassName('foto');

	if(pos == 0 && slideItem > 0){
		slideItem--;
	} else if(pos == 1 && slideItem < slide.length - 1){
		slideItem++;
	}

	slideShowArea[0].style.marginLeft = '-' + (slideWidth * slideItem) + 'px';
	galeriaArea[0].style.marginLeft = '-' + (galeriaWidth * slideItem) + 'px';
}
//Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var areah = canvas.height;
var areaw = canvas.width;
var puntos = 0;
var disparo;
var bucle;
var patox = {
	x : 50,
	y : 50,
	velocidad : 5,
	img : document.createElement('img')	
};
var patoy = {
	x : 100,
	y : 190,
	velocidad : 5,
	img : document.createElement('img')	
};
var patoz = {
	x : 100,
	y : 190,
	velocidad : 5,
	img : document.createElement('img')	
};
patox.img.src = "img/pato.jpeg"
patoy.img.src = "img/pato.jpeg"
patoz.img.src = "img/pato.jpeg"

//Clases


//Funciones
function dibujarpx() {
	ctx.drawImage(patox.img, patox.x, patox.y);
}

function dibujarpy() {
	ctx.drawImage(patoy.img, patoy.x, patoy.y);
}

function dibujarpz() {
	ctx.drawImage(patoz.img, patoz.x, patoz.y);
}

function actualizar() {
	
}

function colisiones() {

}

function dibujar() {
	dibujarpx()
	dibujarpy()
	dibujarpz()
}

function frame() {
	actualizar();
	colisiones();
	dibujar();
	bucle = requestAnimationFrame(frame);	
}

function iniciar() {
	var modal = document.getElementById('modal');
	modal.style.display = 'none';
	frame()
}
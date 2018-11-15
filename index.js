//Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var areah = canvas.height;
var areaw = canvas.width;
var puntos = 0;
var disparo;
var bucle;
var patox = {
	x : 800,
	y : 20,
	velocidad : 5,
	img : document.createElement('img')	
};
var patoy = {
	x : 700,
	y : 20,
	velocidad : 5,
	img : document.createElement('img')	
};
var patoz = {
	x : 600,
	y : 20,
	velocidad : 5,
	img : document.createElement('img')	
};
var patoa = {
	x : -300,
	y : 200,
	velocidad : 5,
	img : document.createElement('img')	
};
var patob = {
	x : -200,
	y : 200,
	velocidad : 5,
	img : document.createElement('img')	
};
var patoc = {
	x : -100,
	y : 200,
	velocidad : 5,
	img : document.createElement('img')	
};
patox.img.src = "img/pato.jpeg";
patoy.img.src = "img/pato.jpeg";
patoz.img.src = "img/pato.jpeg";
patoa.img.src = "img/pato.jpeg";
patob.img.src = "img/pato.jpeg";
patoc.img.src = "img/pato.jpeg";

//Clases


//Funciones
function moverpx() {
	if (patox.x > 0) {	
		patox.x -= patox.velocidad;
	}
	if (patox.x <= 0) {
		patox.x = 800;
		patox.velocidad = patox.velocidad+1;
	}	
	if (patox.velocidad > 10) {
		patox.velocidad = 5;
	}
}

function moverpy() {
	if (patoy.x > 0) {	
		patoy.x -= patoy.velocidad;
	}
	if (patoy.x <= 0) {
		patoy.x = 700;
		patoy.velocidad = patoy.velocidad+1;
	}	
	if (patoy.velocidad > 10) {
		patoy.velocidad = 5;
	}	
}

function moverpz() {
	if (patoz.x > 0) {	
		patoz.x -= patoz.velocidad;
	}
	if (patoz.x <= 0) {
		patoz.x = 600;
		patoz.velocidad = patoz.velocidad+1;
	}	
	if (patoz.velocidad > 10) {
		patoz.velocidad = 5;
	}
}
function moverpa() {
	if (patoa.x < 600) {
		patoa.x += patoa.velocidad;
	}
	if (patoa.x > 599) {
		patoa.x = -300;
		patoa.velocidad = patoa.velocidad+1;
	}
	if (patoa.velocidad > 12) {
		patoa.velocidad = 5;
	}
}

function moverpb() {
	if (patob.x < 600) {
		patob.x += patob.velocidad;
	}
	if (patob.x > 599) {
		patob.x = -200;
		patob.velocidad = patob.velocidad+1;
	}
	if (patob.velocidad > 12) {
		patob.velocidad = 5;
	}
}

function moverpc() {
	if (patoc.x < 600) {
		patoc.x += patoc.velocidad;
	}
	if (patoc.x > 599) {
		patoc.x = -100;
		patoc.velocidad = patoc.velocidad+1;
	}
	if (patoc.velocidad > 12) {
		patoc.velocidad = 5;
	}
}

function dibujarpx() {
	ctx.drawImage(patox.img, patox.x, patox.y);
}

function dibujarpy() {
	ctx.drawImage(patoy.img, patoy.x, patoy.y);
}

function dibujarpz() {
	ctx.drawImage(patoz.img, patoz.x, patoz.y);
}
function dibujarpa() {
	ctx.drawImage(patoa.img, patoa.x, patoa.y);
}

function dibujarpb() {
	ctx.drawImage(patob.img, patob.x, patob.y);
}

function dibujarpc() {
	ctx.drawImage(patoc.img, patoc.x, patoc.y);
}

function actualizar() {
	moverpx()
	moverpy()
	moverpz()
	moverpa()
	moverpb()
	moverpc()	
}

function colisiones() {

}

function dibujar() {
	ctx.clearRect(0,0,areaw, areah);	
	dibujarpx()
	dibujarpy()
	dibujarpz()
	dibujarpa()
	dibujarpb()
	dibujarpc()
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
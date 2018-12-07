//Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var areah = canvas.height;
var areaw = canvas.width;
var puntos = 0;
var patos = 0;
var perdiste = crearTM("Game Over");
var ju1 = crearTMIP("Coloque el nombre de Jugador");
var inst = crearTM("Disparele a tanto patos como puedas.No dejes que se escapen");
var ju;
var disparo;
var bucle;
var boom = document.createElement("audio");
var x;
var y;
var patox = {
	x : 1200,
	y : 20,
	velocidad : numeroA(3,8),
	img : document.createElement('img')	
};
var patoy = {
	x : 1100,
	y : 20,
	velocidad : numeroA(3,8),
	img : document.createElement('img')	
};
var patoz = {
	x : 1000,
	y : 20,
	velocidad : numeroA(3,8),
	img : document.createElement('img')	
};
var patoa = {
	x : -300,
	y : 200,
	velocidad : numeroA(3,8),
	img : document.createElement('img')	
};
var patob = {
	x : -200,
	y : 200,
	velocidad : numeroA(3,8),
	img : document.createElement('img')	
};
var patoc = {
	x : -100,
	y : 200,
	velocidad : numeroA(3,8),
	img : document.createElement('img')	
};
patox.img.src = "img/otap.png";
patoy.img.src = "img/otap.png";
patoz.img.src = "img/otap.png";
patoa.img.src = "img/pato.jpeg";
patob.img.src = "img/pato.jpeg";
patoc.img.src = "img/pato.jpeg";
boom.src = 'img/prueba.mp3';

//Clases
class Informacion {
	constructor() {
		
	}
	dibujar() {
		ctx.fillStyle = 'black';
		ctx.font = "18px Arial";
		ctx.fillText("Puntos: "+puntos, 400, 15);
		ctx.fillText("Jugador: "+ju, 20, 15);
		ctx.fillText("Patos: "+patos, 700, 15);
	}
}

var info = new Informacion();
//Funciones
function playS(s) {
	s.currentTime = 0;
	s.play();
}

function crearTM(msj) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var t = document.createTextNode(msj); 
	f.appendChild(m);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var x = document.createTextNode("X");
	cerrar.appendChild(x);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}

function crearTMIP(text, nombre) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var inp = document.createElement('input'); 
	var t = document.createTextNode(text);
	inp.type = text;
	inp.id = nombre;
	inp.name = nombre;
	f.appendChild(m);
	m.appendChild(inp);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var e = document.createTextNode("Enviar");
	cerrar.appendChild(e);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
		if (inp.value == false) {
			ju = "Predeterminado";
		} else {
			ju = inp.value;
		}
		frame();
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}

function mostrarM(obj) {
	obj.style.visibility = "visible";
}

function getMousePos(canvas, evt) {
	return {
		x: evt.clientX,
  		y: evt.clientY
   };
}

function numeroA(num1, num2) {
	return Math.round((Math.random() * num2) + num1);
}

function signoA() {
	var num = numeroA(0,1);
	switch(num) {
		case 0:
			return -1;
			break;
		case 1:
			return 1;
			break;
	}
}

canvas.addEventListener('mousemove', function(evt) {
   var mousePos = getMousePos(canvas, evt);
   x = mousePos.x;
   y = mousePos.y;
}, false);

function Fin() {
	if (patos >= 30) {
		var puntosM = crearTM("Tus puntos son:" +puntos);
		patox.velocidad = 0;
		patoy.velocidad = 0;
		patoz.velocidad = 0;
		patoa.velocidad = 0;
		patob.velocidad = 0;
		patoc.velocidad = 0;
		patox.x = 1300;
		patoy.x = 1200;
		patoz.x = 1100;
		patoa.x = -100;
		patob.x = -200;
		patoc.x = -300;		
		mostrarM(perdiste);
		mostrarM(puntosM);
		setInterval(function () {
			document.location.reload();
		},5000);
	}
}

function choquex() {
	canvas.addEventListener('click', function () {
		if (x > patox.x && patox.x > x-100 && y < 25 && y > 1) {
			puntos = puntos+1;
			patox.x = 1200;
			municiones = municiones-1;
			Municiones();
			playS(boom);
		}
	});		
}

function choquey() {
	canvas.addEventListener('click', function () {
		if (x > patoy.x && patoy.x > x-100 && y < 25 && y > 1) {
			puntos = puntos+1;
			patoy.x = 1100;	
			municiones = municiones-1;
			Municiones();		
			playS(boom);
		}
	});
}

function choquez() {
	canvas.addEventListener('click', function () {
		if (x > patoz.x && patoz.x > x-100 && y < 25 && y > 1) {
			puntos = puntos+1;
			patoz.x = 1000;	
			municiones = municiones-1;
			Municiones();	
			playS(boom);		
		}
	});	
}

function choquea() {
	canvas.addEventListener('click', function () {
		if (x < patoa.x && patoa.x < x+50 && y > 170 && y < 210) {
			puntos = puntos+1;
			patoa.x = -300;
			municiones = municiones-1;
			Municiones();	
			playS(boom);	
		}
	});	
}

function choqueb() {
	canvas.addEventListener('click', function () {
		if (x < patob.x && patob.x < x+50 && y > 170 && y < 210) {
			puntos = puntos+1;
			patob.x = -200;
			municiones = municiones-1;
			Municiones();	
			playS(boom);	
		}	
	});	
}

function choquec() {
	canvas.addEventListener('click', function () {
		if (x < patoc.x && patoc.x < x+50 && y > 170 && y < 210) {
			puntos = puntos+1;
			patoc.x = -100;	
			municiones = municiones-1;
			Municiones();
			playS(boom);			
		}	
	});	
}

function moverpx() {
	if (patox.x > 0) {	
		patox.x -= patox.velocidad;
	}
	if (patox.x <= 0) {
		patox.x = 1200;
		patos = patos+1;
		patox.velocidad = patox.velocidad+1;
		Fin();
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
		patoy.x = 1100;
		patos = patos+1;
		patoy.velocidad = patoy.velocidad+1;
		Fin();		
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
		patoz.x = 1000;
		patos = patos+1;
		patoz.velocidad = patoz.velocidad+1;
		Fin();		
	}	
	if (patoz.velocidad > 10) {
		patoz.velocidad = 5;
	}
}
function moverpa() {
	if (patoa.x < 1000) {
		patoa.x += patoa.velocidad;
	}
	if (patoa.x > 999) {
		patoa.x = -300;
		patos = patos+1;
		patoa.velocidad = patoa.velocidad+1;
		Fin();		
	}
	if (patoa.velocidad > 12) {
		patoa.velocidad = 5;
	}
}

function moverpb() {
	if (patob.x < 1000) {
		patob.x += patob.velocidad;
	}
	if (patob.x > 999) {
		patob.x = -200;
		patos = patos+1;
		patob.velocidad = patob.velocidad+1;
		Fin();		
	}
	if (patob.velocidad > 12) {
		patob.velocidad = 5;
	}
}

function moverpc() {
	if (patoc.x < 1000) {
		patoc.x += patoc.velocidad;
	}
	if (patoc.x > 999) {
		patoc.x = -100;
		patos = patos+1;
		patoc.velocidad = patoc.velocidad+1;
		Fin();		
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
	moverpx();
	moverpy();
	moverpz();
	moverpa();
	moverpb();
	moverpc();
}

function colisiones() {
	choquex();
	choquey();
	choquez();
	choquea();
	choqueb();
	choquec();
}

function dibujar() {
	ctx.clearRect(0,0,areaw, areah);	
	dibujarpx();
	dibujarpy();
	dibujarpz();
	dibujarpa();
	dibujarpb();
	dibujarpc();
	info.dibujar();
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
	mostrarM(ju1);
	mostrarM(inst); 	
}
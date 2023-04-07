let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

function disenharCircuferencia(x, y, radio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

let x = 0;
let direccion = 1;

function actualizarPantalla() {
  limpiarPantalla();
  
  if (x > 600) {
    direccion = -1;
  } else if (x < 0) {
    direccion = 1;
  }

   x += direccion;
  disenharCircuferencia(x, 20, 10);
}

setInterval(actualizarPantalla, 5);

// function exibirAlerta(evento) {
//   let x = evento.pageX - pantalla.offsetLeft;
//   let y = evento.pageY - pantalla.offsetTop;

//   alert(`cordenada x : ${x} , cordenada y : ${y}`);
//   console.log(evento);
// }

// function dibujarCirculo(evento) {
//   let x = evento.pageX - pantalla.offsetLeft;
//   let y = evento.pageY - pantalla.offsetTop;

//   pincel.fillStyle = "blue";
//   pincel.beginPath();
//   pincel.arc(x, y, 10, 0, 2 * 3.14);
//   pincel.fill();

//   console.log(`cordenada x : ${x} , cordenada y : ${y}`);
// }

// pantalla.onclick = dibujarCirculo;

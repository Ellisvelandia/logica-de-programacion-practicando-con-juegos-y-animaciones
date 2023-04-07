let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

let radio = 10;
let xAleatorio;
let yAleatorio;

function disenharCircuferencia(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

let x = 0;

function disenharObjetivo(x, y) {
  disenharCircuferencia(x, y, radio + 20, "red");
  disenharCircuferencia(x, y, radio + 10, "white");
  disenharCircuferencia(x, y, radio, "red");
}

function sortearPosicion(maximo) {
  return Math.floor(Math.random() * maximo);
}

function actualizarPantalla() {
  limpiarPantalla();
  xAleatorio = sortearPosicion(600);
  yAleatorio = sortearPosicion(400);
  disenharObjetivo(xAleatorio, yAleatorio);
  x++;
}

setInterval(actualizarPantalla, 1000);

function disparar(evento) {
  let x = evento.PageX - pantalla.offsetLeft;
  let y = evento.PageY - pantalla.offsetTop;

  if (
    x < xAleatorio + radio &&
    x > xAleatorio - radio &&
    y < yAleatorio + radio &&
    y > yAleatorio - radio
  ) {
    alert("Tiro certero");
  }
}

pantalla.onclick = disparar;

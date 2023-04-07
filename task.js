var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var puedoDibujar = false;
var colorActual = "blue";

function dibujarCirculo(evento) {
  if (puedoDibujar) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    pincel.fillStyle = colorActual;
    pincel.beginPath();
    pincel.arc(x, y, 5, 0, 2 * Math.PI);
    pincel.fill();
  }
}

pantalla.onmousemove = dibujarCirculo;

function habilitarDibujar() {
  puedoDibujar = true;
}

function deshabilitarDibujar() {
  puedoDibujar = false;
}

pantalla.onmousedown = habilitarDibujar;
pantalla.onmouseup = deshabilitarDibujar;

var paleta = document.getElementById("paleta");
paleta.addEventListener("click", function (evento) {
  var color = evento.target.getAttribute("data-color");
  if (color) {
    colorActual = color;
  }
});

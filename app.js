function dibujarCuadrado(x, y, color) {
  let pantalla = document.querySelector("canvas");
  let pincel = pantalla.getContext("2d");

  pincel.fillStyle = color;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, 50, 50);
}


for (let x = 0; x < 600; x = x + 50) {
  dibujarCuadrado(x, 50, "yellow");
  dibujarCuadrado(x, 0, "red");
  dibujarCuadrado(x, 100, "blue");
}

// Bandera italia

// pincel.fillStyle = "white";
// pincel.fillRect(0,0,600,400);

// pincel.fillStyle = "green";
// pincel.fillRect(0, 0, 200, 400);

// pincel.fillStyle = "red";
// pincel.fillRect(400, 0, 200, 400);

// pincel.fillStyle = "yellow";
// pincel.beginPath();
// pincel.moveTo(300,200);
// pincel.lineTo(200,400);
// pincel.lineTo(400, 400);
// pincel.fill();

// pincel.fillStyle = "blue";
// pincel.beginPath();
// pincel.arc(300, 200, 50,0,2*3.14);
// pincel.fill();

//  var pantalla = document.querySelector("canvas");
//  var ctx = pantalla.getContext("2d");

// escuadra

//  ctx.fillStyle = "black";
//  ctx.beginPath();
//  ctx.moveTo(50, 50);
//  ctx.lineTo(50, 400);
//  ctx.lineTo(400, 400);
//  ctx.fill();

//  ctx.fillStyle = "white";
//  ctx.beginPath();
//  ctx.moveTo(100, 175);
//  ctx.lineTo(100, 350);
//  ctx.lineTo(275, 350);
//  ctx.fill();

// Cara minecraft

// pincel.fillStyle = "darkgreen";
// pincel.fillRect(135, 50, 350, 300);
// pincel.fillStyle = "black";
// pincel.fillRect(180, 100, 90, 90);
// pincel.fillRect(360, 100, 90, 90);

// pincel.fillRect(270, 190, 90, 100);

// pincel.fillRect(235, 240, 40, 110);
// pincel.fillRect(355, 240, 40, 110);

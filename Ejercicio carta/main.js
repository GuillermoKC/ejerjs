
var div = document.getElementById("miDiv");
var imagen = document.getElementById("miImagen");
var estado = 1;

div.addEventListener("mouseover", function() {
  if (estado === 1) {
    imagen.src = "card-back.png";
    estado = 2;
  } else {
    imagen.src = "card-front.png";
    estado = 1;
  }
});


div.addEventListener("mouseout", function() {
  if (estado === 1) {
    imagen.src = "card-back.png";
  } else {
    imagen.src = "card-front.png";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var img = document.getElementById("miinteruptor");
  var originalSrc = img.src;  // Guarda la ruta de la imagen original

  img.addEventListener("click", function () {
    if (img.src === originalSrc) {
      img.src = "bon.jpg";  // Cambia a la nueva imagen
    } else {
      img.src = originalSrc;  // Vuelve a la imagen original
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var interruptor = document.getElementById("miinteruptor");
  var bombilla = document.getElementById("bombila");

  interruptor.addEventListener("click", function () {
    if (interruptor.src.includes("bon.jpg")) {
      bombilla.src = "on.jpg"; // Cambia la imagen de la bombilla a encendida.jpg
    } else {
      bombilla.src = "off.jpg"; // Cambia la imagen de la bombilla a apagada.jpg
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var zoomSlider = document.getElementById("zoomSlider");
  var bombilla = document.getElementById("bombila");

  zoomSlider.addEventListener("input", function () {
    var zoomValue = zoomSlider.value;
    bombilla.style.transform = "scale(" + zoomValue / 100 + ")";

  });
  ligthSlider.addEventListener("input", function () {
    var ligthValue = ligthSlider.value;
    var darknessValue = 100 - ligthValue; // Calcula el valor de oscuridad

    bombilla.style.filter = "brightness(" + darknessValue / 100 + ")";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var zoomSlider = document.getElementById("zoomSlider");
  var controlzomm = document.querySelector(".controlzomm");

  zoomSlider.addEventListener("input", function () {
    var zoomValue = parseInt(zoomSlider.value);
    var mappedValue;

    switch (zoomValue) {
      case 110:
        mappedValue = 1;
        break;
      case 120:
        mappedValue = 2;
        break;
      case 130:
        mappedValue = 3;
        break;
      case 140:
        mappedValue = 4;
        break;
      case 150:
        mappedValue = 5;
        break;
      case 160:
        mappedValue = 6;
        break;
      case 170:
        mappedValue = 7;
        break;
      default:
        mappedValue = 0;
    }

    controlzomm.textContent = "Light bulb Zoom: " + mappedValue;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var zoomSlider = document.getElementById("ligthSlider");
  var controlligth = document.querySelector(".controlligth");

  zoomSlider.addEventListener("input", function () {
    var ligthValue = parseInt(zoomSlider.value);
    var mappedValue = Math.ceil(ligthValue / 5);
    controlligth.textContent = "Light Level: " + mappedValue;
  });
});







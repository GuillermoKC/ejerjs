document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("miinteruptor");
    var originalSrc = img.src;  // Guarda la ruta de la imagen original
  
    img.addEventListener("click", function() {
      if (img.src === originalSrc) {
        img.src = "bon.jpg";  // Cambia a la nueva imagen
      } else {
        img.src = originalSrc;  // Vuelve a la imagen original
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var interruptor = document.getElementById("miinteruptor");
    var bombilla = document.getElementById("bombila");
  
    interruptor.addEventListener("click", function() {
      if (interruptor.src.includes("bon.jpg")) {
        bombilla.src = "on.jpg"; // Cambia la imagen de la bombilla a encendida.jpg
      } else {
        bombilla.src = "off.jpg"; // Cambia la imagen de la bombilla a apagada.jpg
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var zoomSlider = document.getElementById("zoomSlider");
    var bombilla = document.getElementById("bombila");
  
    zoomSlider.addEventListener("input", function() {
      var zoomValue = zoomSlider.value;
      bombilla.style.transform = "scale(" + zoomValue / 100 + ")";
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var zoomSlider = document.getElementById("zoomSlider");
    var controlzomm = document.querySelector(".controlzomm");
  
    zoomSlider.addEventListener("input", function() {
      var zoomValue = zoomSlider.value;
      controlzomm.textContent = "Light bulb Zoom: " + zoomValue;
    });
  });
  
  
  
  
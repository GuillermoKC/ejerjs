function caraocruz() {
    var resultado = Math.round(Math.random());
    if (resultado === 1) {
      return "cara";
    } else {
      return "cruz";
    }
  }
  
  // Invocar la función y mostrar el resultado por consola
  console.log(caraocruz());
  
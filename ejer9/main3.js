function saludarTresVeces(palabra) {
  
    var saludo = palabra.toUpperCase() + " ";
    var saludoRepetido = saludo.repeat(3);
    return saludoRepetido.trim();
  }
  
  var saludo = "Hola";
  var resultado = saludarTresVeces(saludo);
  console.log(resultado);
  
function reemplazarAporCero(cadena) {
    return cadena.replace(/[aá]/gi, 'o');
  }
  
  // Ejemplo de uso
  var texto = "CAsas amaigas del arbol machado";
  var resultado = reemplazarAporCero(texto);
  console.log(resultado); // "Hol0 amigo, ¿cómo est0s?"
  
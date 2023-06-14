function comprobarInicio(cadena) {
  
    if (cadena.startsWith("aca")) {
      return true;
    } else {
      return false;
    }
  }
  
  var cadena1 = "academia";
  var cadena2 = "escuela";
  
  var resultado1 = comprobarInicio(cadena1);
  var resultado2 = comprobarInicio(cadena2);
  
  console.log("Estos es "+ resultado1);
  console.log("Estos es " + resultado2);
  
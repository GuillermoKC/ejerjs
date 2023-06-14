function convertirNumero(numeroString) {
    let numero = 0;
    const numeroLower = numeroString.toLowerCase();
  
   
    switch (numeroLower) {
      case 'uno':
        numero = 1;
        break;
      case 'dos':
        numero = 2;
        break;
      case 'tres':
        numero = 3;
        break;
      case 'cuatro':
        numero = 4;
        break;
      case 'cinco':
        numero = 5;
        break;
      default:
        numero = -1;
        break;
    }
  
    return numero;
  }
  

  const numeroString = prompt("Introduce un número del uno al cinco en formato de cadena:");
  const numero = convertirNumero(numeroString);
  console.log("El número convertido es:", numero);
  alert ("El número convertido es:"+" "+ numero);
  
var historial = [];
var victoriasUsuario = 0;
var victoriasComputadora = 0;
var rondasJugadas = 0;

function jugar(opcionUsuario) {
  // Generar una opción aleatoria para la computadora
  var opciones = ['🥊', '✂', '🖐'];
  var indiceAleatorio = Math.floor(Math.random() * opciones.length);
  var opcionComputadora = opciones[indiceAleatorio];

  // Mostrar la elección del usuario y de la computadora
  var resultadoTexto = 'Tu elección: ' + opcionUsuario + '<br>';
  resultadoTexto += 'Elección de la computadora: ' + opcionComputadora + '<br>';

  // Determinar el resultado
  var resultado = '';
  if (opcionUsuario === opcionComputadora) {
    resultado = '¡Empate!';
  } else if (
    (opcionUsuario === '🥊' && opcionComputadora === '✂') ||
    (opcionUsuario === '✂' && opcionComputadora === '🖐') ||
    (opcionUsuario === '🖐' && opcionComputadora === '🥊')
  ) {
    resultado = '¡Ganaste!';
    victoriasUsuario++;
  } else {
    resultado = '¡Perdiste!';
    victoriasComputadora++;
  }

  // Actualizar el historial
  historial.push({ ganador: resultado, usuario: opcionUsuario, computadora: opcionComputadora });

  // Mostrar el resultado
  resultadoTexto += resultado;

  // Mostrar el historial de ganadores
  var historialHTML = document.getElementById('historial');
  var historialTexto = '';
  for (var i = 0; i < historial.length; i++) {
    historialTexto += '<tr><td>Ronda ' + (i + 1) + '</td><td>' + historial[i].ganador + '</td><td>' + historial[i].usuario + '</td><td>' + historial[i].computadora + '</td></tr><br>';
  }
  historialHTML.innerHTML = historialTexto;

  // Mostrar el marcador
  var marcadorHTML = document.getElementById('marcador');
  var marcadorTexto = 'Marcador: ' + victoriasUsuario + ' - ' + victoriasComputadora;
  marcadorHTML.innerHTML = marcadorTexto;

  // Incrementar las rondas jugadas
  rondasJugadas++;

  // Comprobar si se ha alcanzado el mejor de 3
  if (victoriasUsuario === 3 || victoriasComputadora === 3) {
    // Determinar el ganador final
    var ganadorFinal = victoriasUsuario > victoriasComputadora ? '👍😁🤣¡Ganaste la partida!🤣😁👍' : '🤦‍♀️😩😭¡Perdiste la partida!😭😩🤦‍♀️';
    resultadoTexto += '<br>' + ganadorFinal;

    // Reiniciar las variables para una nueva partida
    historial = [];
    victoriasUsuario = 0;
    victoriasComputadora = 0;
    rondasJugadas = 0;

    // Limpiar el historial en el HTML
    historialHTML.innerHTML = '';
  }

  // Mostrar los resultados en el documento HTML
  var resultadosHTML = document.getElementById('resultado-final');
  resultadosHTML.innerHTML = resultadoTexto;
}

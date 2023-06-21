var historial = [];
var victoriasUsuario = 0;
var victoriasComputadora = 0;
var rondasJugadas = 0;

function jugar(opcionUsuario) {
  var opciones = ['🥊', '✂', '🖐'];
  var indiceAleatorio = Math.floor(Math.random() * opciones.length);
  var opcionComputadora = opciones[indiceAleatorio];
  var resultadoTexto = 'Tu elección: ' + opcionUsuario + '<br>';
  resultadoTexto += 'Elección de la computadora: ' + opcionComputadora + '<br>';
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
  historial.push({ ganador: resultado, usuario: opcionUsuario, computadora: opcionComputadora });
  resultadoTexto += resultado;
  var historialHTML = document.getElementById('historial');
  var historialTexto = '';
  for (var i = 0; i < historial.length; i++) {
    historialTexto += '<tr><td>Ronda ' + (i + 1) + '</td><td>' + historial[i].ganador + '</td><td>' + historial[i].usuario + 'VS'+'</td><td>' + historial[i].computadora + '</td></tr><br>';
  }
  historialHTML.innerHTML = historialTexto;
  var marcadorHTML = document.getElementById('marcador');
  var marcadorTexto = 'Marcador: ' + victoriasUsuario + ' - ' + victoriasComputadora;
  marcadorHTML.innerHTML = marcadorTexto;

  rondasJugadas++;

  if (victoriasUsuario === 3 || victoriasComputadora === 3) {
    var ganadorFinal = victoriasUsuario > victoriasComputadora ? '👍😁🤣¡Ganaste la partida!🤣😁👍' : '🤦‍♀️😩😭¡Perdiste la partida!😭😩🤦‍♀️';
    resultadoTexto += '<br>' + ganadorFinal;
    historial = [];
    victoriasUsuario = 0;
    victoriasComputadora = 0;
    rondasJugadas = 0;
    historialHTML.innerHTML = '';
  }
  var resultadosHTML = document.getElementById('resultado-final');
  resultadosHTML.innerHTML = resultadoTexto;
}

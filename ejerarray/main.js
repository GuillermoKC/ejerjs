const miArray = ["😫", "🛹", "🎮", "🏴‍☠️", "🍕", "🍍", "🛰", "🥅", "🖥", "💣", "❤"];
const emojisAgregados = [];

function agregarEmojipush() {
  const emojiDiv = document.getElementById("pizarra");
  const randomIndex = Math.floor(Math.random() * miArray.length);
  const emoji = miArray[randomIndex];
  emojisAgregados.push(emoji)
  const emojis = "[" + emojisAgregados.join(" ") + "]";
  emojiDiv.innerHTML = emojis;
}
function agregarEmojiunshift() {
    const emojiDiv = document.getElementById("pizarra");
    const randomIndex = Math.floor(Math.random() * miArray.length);
    const emoji = miArray[randomIndex];
    emojisAgregados.unshift(emoji);
    const emojis = "[" + emojisAgregados.join(" ") + "]";
    emojiDiv.innerHTML = emojis;
  }
  function agregarEmojiat() {
    const numeroInput = document.getElementById("numeroInput");
    const cantidad = parseInt(numeroInput.value, 10);
  
    if (isNaN(cantidad) || cantidad < 0) {
      alert("Ingresa un número válido mayor o igual a 0");
      return;
    }
  
    const emojiDiv = document.getElementById("pizarra");
  
    for (let i = 0; i < cantidad; i++) {
      const randomIndex = Math.floor(Math.random() * miArray.length);
      const emoji = miArray[randomIndex];
      emojisAgregados.unshift(emoji);
    }
  
    const emojis = "[" + emojisAgregados.join(" ") + "]";
    emojiDiv.innerHTML = emojis;
  }
  function agregarEmojiat() {
    const numeroInput = document.getElementById("numeroInput");
    const posicion = parseInt(numeroInput.value, 10);

    if (isNaN(posicion) || posicion < 0 || posicion > emojisAgregados.length) {
      alert("Ingresa una posición válida entre 0 y " + emojisAgregados.length);
      return;
    }

    const emojiDiv = document.getElementById("pizarra");
    const randomIndex = Math.floor(Math.random() * miArray.length);
    const emoji = miArray[randomIndex];
    emojisAgregados.splice(posicion, 0, emoji);

    const emojis = "[" + emojisAgregados.join(" ") + "]";
    emojiDiv.innerHTML = emojis;
  }

  function quitarEmojipop() {
    if (emojisAgregados.length > 0) {
      emojisAgregados.pop();
      const emojiDiv = document.getElementById("pizarra");
      const emojis = emojisAgregados.length > 0 ? "[" + emojisAgregados.join(" ") + "]" : "";
      emojiDiv.innerHTML = emojis;
    }
    
  }
  function quitarEmojishift() {
    if (emojisAgregados.length > 0) {
      emojisAgregados.shift();
      const emojiDiv = document.getElementById("pizarra");
      const emojis = emojisAgregados.length > 0 ? "[" + emojisAgregados.join(" ") + "]" : "";
      emojiDiv.innerHTML = emojis;
    }
  }
  function quitarEmojiat() {
    const numeroInput = document.getElementById("numeroInputq");
    const posicion = parseInt(numeroInput.value, 10);
  
    if (isNaN(posicion) || posicion < 0 || posicion >= emojisAgregados.length) {
      alert("Quitar una posición válida entre 0 y " + (emojisAgregados.length - 1));
      return;
    }
  
    emojisAgregados.splice(posicion, 1);
  
    const emojiDiv = document.getElementById("pizarra");
    const emojis = emojisAgregados.length > 0 ? "[" + emojisAgregados.join(" ") + "]" : "";
    emojiDiv.innerHTML = emojis;
  }
  
  





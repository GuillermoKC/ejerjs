// Ejemplo de uso
const miArray = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const elementoBuscado = "🍍";
let indice = miArray.indexOf(elementoBuscado);

if (indice !== -1) {
  console.log(
    "El elemento",
    elementoBuscado,
    "se encuentra en la posición",
    indice
  );
} else {
  console.log("El elemento", elementoBuscado, "no se encuentra en el array");
}

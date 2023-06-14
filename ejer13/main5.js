const miArray = ["🌶", "🥛", "🌶", "🥛", "🌶"];

const miNuevoArray = miArray.map(elemento => {
  if (elemento === "🌶") {
    return [elemento, "🥵"];
  } else {
    return elemento;
  }
}).flat();

console.log(miNuevoArray); 

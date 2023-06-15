const miArray = ["🍓", "🍋", "🍓", "🍋", "🍓"];

const miNuevoArray = miArray.map(elemento => {
  if (elemento === "🍓") {
    return "🍄";
  } else {
    return elemento;
  }
});


console.log(miNuevoArray); 

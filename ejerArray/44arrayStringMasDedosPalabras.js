// Dato un array de String, devolver otro con valores que este formados
// por mas de dos palabras.

// Ejemplo: ["hola", "Carlos Alfredo", "Ciudad Medellin", "Montoya"]

const arraydosPalabras = (array) => {
  let newArray = [];
  for (const palabra of array) {
    if (palabra.split(" ").length > 1) {
      newArray.push(palabra);
    }
  }
  console.log(newArray);
};

arraydosPalabras([
  "hola",
  "Carlos Alfredo",
  "Ciudad Medellin",
  "Montoya",
  "hola hola hola",
]);

// --- Agregar elementos a un array -----


const array1 = ["Carlos", "Alfredo"];

// ------------ Agregar al final ----------------

array1.push("Montoya");


// ------------ Agregar al inicio ----------------

array1.unshift("Goez");

array1.splice (1,0, "develop");

// console.log(array1);
// ------------ Concatenar matriz ----------------

const esposa = ["Andrea", "Montoya"];

const newArray = array1.concat(esposa);

// console.log(newArray);

// ------------ Concatenar  ----------------

const linda = ["Andrea", "Montoya"];
const mami = linda.length-1
console.log(mami);
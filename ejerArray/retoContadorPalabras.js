// Contador de palabras

const arrayPalabras = ["Carlos", "Alfredo", "Montoya", "Goez"];

const arr = arrayPalabras.splice(' ')
let counter = 0;
let counterb = 0;
for (let k = 0; k < arr.length; k++) {
     counter++;
}

console.log(counter);

//-------------------FlatMap-------------------

const arrayPalabrasb =  ["Carlos papa", "Alfredo papa", "Montoya papa", "Goez papa"];
let conteo = 0;
const num = arrayPalabrasb.flatMap( p => p.split(' ')).length
console.log(num);
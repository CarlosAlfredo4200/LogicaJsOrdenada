// De un array de numero y string extraer solo los numero

const arrayBase = [1, "Hola", 2, 1.5];
let enteros = [];
let enterosb = [];

function soloNumeros(array) {

    //Solo numeros
  for (let k = 0; k < array.length; k++) {
    if (typeof array[k] === "number") {
      enteros.push(array[k]);
    }
  }

    // Solo enteros  metodo Number.isInteger
  for (let k = 0; k < array.length; k++) {
    if (Number.isInteger(array[k])) {
      enterosb.push(array[k]);
    }
  }



  console.log(enteros);
  console.log(enterosb);
}

soloNumeros(arrayBase);

// const array = [-1,1,2,3,4,5];

// console.log(Math.max(...array));
// console.log(Math.min(...array));

// Para practicar
// https://digitalnestweb.com/ejercicios-resueltos-javascript-funciones/

// Entrevista dev js

//https://digitalnestweb.com/10-preguntas-de-entrevista-para-un-desarrollador-javascript/

const numeros = [1, 2, 3, 4];
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];



function filtrarArr(arr, num) {
  let arrayFiltrado = [];

  arr.map((e) => (e % num === 0 ? arrayFiltrado.push(e) : []));
  console.log(arrayFiltrado);
}

filtrarArr(numeros2, 5);

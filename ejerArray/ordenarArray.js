// Ordenando con map

// el array a ordenar
var list = ["Delta", "alpha", "CHARLIE", "bravo"];

// array temporal contiene objetos con posición y valor de ordenamiento
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

//console.log(mapped);

//------------- ordenando el array mapeado que contiene los valores reducidos-------

//------------- Algoritmo burbuja -------------------//

const arrayNumeros = [9, 3, 6, 4, 7, -3];

function ordenamientoLogico(arr) {
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 0; i < arr.length - k - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  console.log(`\nFunción de ordenamiento :${arr}`);
}
ordenamientoLogico(arrayNumeros);

console.log(`\nOrdenamiento con sort ${arrayNumeros.sort()}`);

 
const mayorAmenor = arrayNumeros.sort( function (b, a) { 
  if(a==b){
    return 0;
  }
  if(a < b){
    return -1;
  }
  return 1});
 
console.log("\nOrdenamiento if :" +mayorAmenor);
// -----------------------------------------------------

// Un array de elementos numéricos, usando una función de comparación:

var arr = [40, 1, 5, 200];

function comparar(a, b) {
  return a - b;
}
arr.sort(comparar); // [ 1, 5, 40, 200 ]

// Lo mismo pero usando una función anónima normal:

var arr = [40, 1, 5, 200];
arr.sort(function (a, b) {
  return a - b;
}); // [ 1, 5, 40, 200 ]

// Lo mismo escrito más compacto mediante una función flecha:
var arr = [40, 1, 5, 200];
arr.sort((a, b) => a - b); // [ 1, 5, 40, 200 ]

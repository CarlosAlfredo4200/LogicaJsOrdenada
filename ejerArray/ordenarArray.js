// Ordenando con map

// el array a ordenar
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporal contiene objetos con posición y valor de ordenamiento
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando el array mapeado que contiene los valores reducidos
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// contenedor para el orden resultante
var result = mapped.map(function(el){
  return list[el.index];
});

// -----------------------------------------------------

// Un array de elementos numéricos, usando una función de comparación:

var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // [ 1, 5, 40, 200 ]

// Lo mismo pero usando una función anónima normal:

var arr = [ 40, 1, 5, 200 ];
arr.sort(function(a,b){return a - b;});  // [ 1, 5, 40, 200 ]

// Lo mismo escrito más compacto mediante una función flecha:
var arr = [ 40, 1, 5, 200 ];
arr.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]
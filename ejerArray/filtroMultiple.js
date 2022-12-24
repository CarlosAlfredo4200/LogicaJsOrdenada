const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function filtrarArr(arr, num) {
  let arrayFiltrado = [];

  arr.map((e) => (e % num === 0 ? arrayFiltrado.push(e) : []));
  console.log(arrayFiltrado);
}

filtrarArr(numeros2, 5);

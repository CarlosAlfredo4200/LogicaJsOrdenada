const numeros = [1,2,3,4,5];

// ---------------------modifican el origen--------------
// numeros[0] = 12;
// numeros.push(12);
// numeros.pop();
// numeros.slice(1,1);

// -----------------No modifican el origen-------------

const eliminarDato = (array, i) => {
   const arr = array.filter(item => item !== i)
   console.log(arr);
   console.log(array);
}

console.log(eliminarDato(numeros, 2));
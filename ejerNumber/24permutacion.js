// Dado un array de enteros y un nùmero, detectar si esa lista de nùmeros es una permutación
// del 1 al número aportado.
// Permutación es una secuencia de números en orden sin que falte nunguno entre ellos.

// permutacion([1,2,3,4,5], 5) true

let secuencia =[1,2,3,4,5];

const permutacion = (secuencia, numero) => {

    for (let k = 0; k < numero; k++) {
      
       if (secuencia.indexOf(k + 1) < 0) {
           return false; 
       } 
    }
    return true
}

console.log(permutacion(secuencia, 4))

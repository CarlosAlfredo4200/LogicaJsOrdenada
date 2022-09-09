// Dado un número mostrar los número dede el 0 hasta el número.
// A los multiplos de 3 log(fizz)
// A los multiplos de 3 log(Bazz)
// Para los multipli de ambos (fizz-Bazz)

const fizzBazz = (numero) => {
  let resultado = "";

  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = "FizzBazz";
  } else if (numero % 3 === 0) {
    resultado = "Fizz";
  } else if (numero % 5 === 0) {
    resultado = "Bizz";
  } else {
    return numero;
  }

  return resultado;
};


const imprimir = ( numero) => {
    for (let k = 0; k <= numero; k++) {
        console.log(fizzBazz(k));
         
        
    }
}

imprimir(15)

 
// * Enunciado: Escribe un programa que muestre por consola(con un print) los números de 1 a 100(ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
//  * - Múltiplos de 3 por la palabra "fizz".
//  * - Múltiplos de 5 por la palabra "buzz".
//  * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".


const fizzBazz = () => {

        let resultado = ''
        for (let k = 0; k <= 100; k++) {
            
                resultado = k
            if (k % 3 === 0 && k % 5 === 0) {
                resultado = 'FizzBuzz';
            } else if (k % 3 === 0) {
                resultado = 'Fizz';
            } else if (k % 5 === 0){
                resultado = 'Buzz';
                
            }

            console.log(resultado);
            
        }
}

fizzBazz()

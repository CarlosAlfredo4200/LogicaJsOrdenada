// * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
//     * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
//  * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597…...

const fibonacci = () => {
    
    let num1 = 0;
    let num2 = 1;
    let suma = 1;

    // Mostrar valor inicial
    console.log(num1);

    for (let k = 0; k <= 10; k++) {
         
        // Mostrar la suma
        console.log(suma);

        suma = num1 + num2;
        //Despues, cambiamos la segunda variable por la primera
        num1 = num2;
        //Por ultimo, cambiamos la suma por la segunda variable
        num2 = suma;
         
         
        
    }
}

fibonacci()
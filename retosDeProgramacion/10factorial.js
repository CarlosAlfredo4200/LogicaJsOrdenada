// * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.

// ejemp: factorial de 3 = 6

// 3! = 3*2*1 = 6

// Así que podemos calcular el factorial Javascript como una función recursiva, es decir, que hace referencia a sí misma multiplicando el argumento por el factorial javascript del número precedente:

// ----  Forma recursiva ----


// function factorialRecursivo(n) {
//     if (n == 0) {
//         return 1;
//     }
//     return n * factorialRecursivo(n - 1);
// }


// console.log(factorialRecursivo(5));



// ----  Forma tradicional ----

// function factorial(n) {
    //     let total = 1;
    //     for (i = 1; i <= n; i++) {
        //         total = total * i;
        
        //     }
        //     return total;
        // }
        
        // console.log(factorial(5));



        // ----  Forma tradicional B ----
        
        // function factorial(n) {
        //     if (n < 0) return;
        //     if (n < 2) return 1;
        //     return n * factorial(n - 1);
        // }
        // console.log(factorial(5));
       
        
        
        
        // ----  Forma tradicional C ----

// function factorial(n) {
//     if (n > 1) {
//         return n * factorial(n - 1);
//     }
//     return 1;
// }


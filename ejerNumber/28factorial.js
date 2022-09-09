//Dado un número devolver el factorial

//1 x 2 x 3 x 4 x 5 = ?

const factorial = ( numero ) => {

    let factorial = 1;
    for (let k = 1; k <= numero; k++) {
         
        factorial *=  k;
        console.log(factorial);
    }
}

factorial(3)
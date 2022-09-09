//Dados dos números devolver los resultados de las operaciones básicas entre ellos.
//Suma, resta, multiplicación y división.


const operaciones = (num1, num2) => {

    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;
    
    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    division = num1/ num2;
    (num2 <= 0) ? console.log('¡El divisor no puede ser Cero!'):  
    
    
    console.log(`
    el resultado  de ${num1} + ${num2} es : ${suma}\n
    el resultado  de ${num1} - ${num2} es : ${resta}\n
    el resultado  de ${num1} * ${num2} es : ${multiplicacion}\n
    el resultado  de ${num1} / ${num2} es : ${division}\n`);

}

operaciones(5,4)